import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-webhook-secret',
}

interface ReviewWebhookData {
  name: string;
  email: string;
  rating: number;
  comment: string;
  product: string;
  date: string;
}

// Simple validation for incoming data
function validateReviewData(data: unknown): data is ReviewWebhookData {
  if (!data || typeof data !== 'object') return false;
  const d = data as Record<string, unknown>;
  
  return (
    typeof d.name === 'string' && d.name.length > 0 && d.name.length <= 100 &&
    (d.email === undefined || d.email === null || d.email === '' || 
      (typeof d.email === 'string' && d.email.length <= 255)) &&
    typeof d.rating === 'number' && d.rating >= 1 && d.rating <= 5 &&
    typeof d.comment === 'string' && d.comment.length > 0 && d.comment.length <= 1000 &&
    typeof d.product === 'string' && d.product.length > 0 &&
    typeof d.date === 'string'
  );
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Authentication: Verify webhook secret if configured
    const webhookSecret = Deno.env.get('WEBHOOK_SECRET');
    if (webhookSecret) {
      const providedSecret = req.headers.get('x-webhook-secret');
      if (providedSecret !== webhookSecret) {
        console.warn('Unauthorized webhook request - invalid or missing secret');
        return new Response(
          JSON.stringify({ error: 'Unauthorized' }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 401 
          }
        );
      }
    }

    const reviewData: unknown = await req.json();
    
    // Validate input data structure
    if (!validateReviewData(reviewData)) {
      console.warn('Invalid webhook data received:', reviewData);
      return new Response(
        JSON.stringify({ error: 'Invalid data format' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      );
    }

    console.log('Review webhook triggered:', { 
      name: reviewData.name, 
      product: reviewData.product, 
      rating: reviewData.rating 
    });

    // Get webhook URL from environment
    const n8nWebhookUrl = Deno.env.get('N8N_WEBHOOK_URL');

    if (n8nWebhookUrl) {
      // Validate the webhook URL is a proper URL
      try {
        const url = new URL(n8nWebhookUrl);
        // Only allow https URLs to prevent SSRF to internal services
        if (url.protocol !== 'https:') {
          console.error('N8N_WEBHOOK_URL must use HTTPS');
          throw new Error('Invalid webhook URL protocol');
        }
      } catch {
        console.error('Invalid N8N_WEBHOOK_URL configured');
        return new Response(
          JSON.stringify({ error: 'Webhook configuration error' }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 500 
          }
        );
      }

      // Send to n8n webhook
      const webhookResponse = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      console.log('Webhook response status:', webhookResponse.status);
      
      if (!webhookResponse.ok) {
        throw new Error(`Webhook failed with status: ${webhookResponse.status}`);
      }
    } else {
      console.log('No N8N_WEBHOOK_URL configured. Review data logged only.');
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Webhook processed' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Error processing webhook:', error);
    
    // Return generic error message to avoid leaking internal details
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
