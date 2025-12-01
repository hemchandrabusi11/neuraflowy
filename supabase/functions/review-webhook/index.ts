import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ReviewWebhookData {
  name: string;
  email: string;
  rating: number;
  comment: string;
  product: string;
  date: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const reviewData: ReviewWebhookData = await req.json();
    
    console.log('Review webhook triggered:', reviewData);

    // Get webhook URL from environment or use a placeholder
    // Users will configure their n8n webhook URL manually
    const webhookUrl = Deno.env.get('N8N_WEBHOOK_URL');

    if (webhookUrl) {
      // Send to n8n webhook
      const webhookResponse = await fetch(webhookUrl, {
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
      console.log('No webhook URL configured. Review data logged only.');
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
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});