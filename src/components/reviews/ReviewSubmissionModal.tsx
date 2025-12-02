import { useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface ReviewSubmissionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const services = [
  "AI Chatbots & Automation",
  "CRM Solutions",
  "AI Receptionist",
  "WhatsApp Business Automation",
  "Personalized Email Follow-Up System",
  "Custom Workflows"
];

// Zod schema for review validation
const reviewSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  location: z.string().trim().max(100, "Location must be less than 100 characters").optional().nullable().transform(val => val || null),
  email: z.union([
    z.string().email("Invalid email address").max(255, "Email must be less than 255 characters"),
    z.literal(""),
    z.null()
  ]).optional().nullable().transform(val => val || null),
  product: z.string().min(1, "Please select a service"),
  rating: z.number().int().min(1, "Please select a rating").max(5, "Rating must be between 1 and 5"),
  comment: z.string().trim().min(1, "Review text is required").max(1000, "Review must be less than 1000 characters"),
  image_url: z.union([
    z.string().url("Invalid URL format"),
    z.literal(""),
    z.null()
  ]).optional().nullable().transform(val => val || null),
});

export const ReviewSubmissionModal = ({ open, onOpenChange, onSuccess }: ReviewSubmissionModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    product: "",
    rating: 0,
    comment: "",
    image_url: "",
    authorized: false
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors({});

    // Validate authorization first
    if (!formData.authorized) {
      toast({
        title: "Authorization required",
        description: "Please authorize us to display your review",
        variant: "destructive"
      });
      return;
    }

    // Validate form data with zod
    const validationResult = reviewSchema.safeParse({
      name: formData.name,
      location: formData.location || null,
      email: formData.email || null,
      product: formData.product,
      rating: formData.rating,
      comment: formData.comment,
      image_url: formData.image_url || null,
    });

    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0] as string] = err.message;
        }
      });
      setValidationErrors(errors);
      
      // Show first error as toast
      const firstError = validationResult.error.errors[0];
      toast({
        title: "Validation Error",
        description: firstError.message,
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const validatedData = validationResult.data;

      // Insert review into database
      const { error: dbError } = await supabase
        .from("reviews")
        .insert({
          name: validatedData.name,
          location: validatedData.location,
          email: validatedData.email,
          product: validatedData.product,
          rating: validatedData.rating,
          comment: validatedData.comment,
          image_url: validatedData.image_url,
          approved: false
        });

      if (dbError) throw dbError;

      // Send webhook notification
      try {
        await supabase.functions.invoke("review-webhook", {
          body: {
            name: validatedData.name,
            email: validatedData.email || "",
            rating: validatedData.rating,
            comment: validatedData.comment,
            product: validatedData.product,
            date: new Date().toISOString()
          }
        });
      } catch (webhookError) {
        console.error("Webhook error:", webhookError);
        // Don't fail the submission if webhook fails
      }

      toast({
        title: "Thank you!",
        description: "Your review is pending approval and will be visible soon."
      });

      // Reset form
      setFormData({
        name: "",
        location: "",
        email: "",
        product: "",
        rating: 0,
        comment: "",
        image_url: "",
        authorized: false
      });
      setValidationErrors({});
      
      onSuccess();
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting review:", error);
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Write a Review</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Name */}
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              maxLength={100}
              className={validationErrors.name ? "border-destructive" : ""}
            />
            {validationErrors.name && (
              <p className="text-sm text-destructive mt-1">{validationErrors.name}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="City, Country"
              maxLength={100}
              className={validationErrors.location ? "border-destructive" : ""}
            />
            {validationErrors.location && (
              <p className="text-sm text-destructive mt-1">{validationErrors.location}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email (not displayed publicly)</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              maxLength={255}
              className={validationErrors.email ? "border-destructive" : ""}
            />
            {validationErrors.email && (
              <p className="text-sm text-destructive mt-1">{validationErrors.email}</p>
            )}
          </div>

          {/* Product/Service */}
          <div>
            <Label htmlFor="product">Product / Service *</Label>
            <Select value={formData.product} onValueChange={(value) => setFormData({ ...formData, product: value })}>
              <SelectTrigger className={validationErrors.product ? "border-destructive" : ""}>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {validationErrors.product && (
              <p className="text-sm text-destructive mt-1">{validationErrors.product}</p>
            )}
          </div>

          {/* Rating */}
          <div>
            <Label>Rating *</Label>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoveredRating || formData.rating)
                        ? "fill-accent-gold text-accent-gold"
                        : "text-muted-foreground/30"
                    }`}
                  />
                </button>
              ))}
            </div>
            {validationErrors.rating && (
              <p className="text-sm text-destructive mt-1">{validationErrors.rating}</p>
            )}
          </div>

          {/* Review Text */}
          <div>
            <Label htmlFor="comment">Your Review *</Label>
            <Textarea
              id="comment"
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              placeholder="Share your experience..."
              rows={5}
              maxLength={1000}
              className={`resize-none ${validationErrors.comment ? "border-destructive" : ""}`}
            />
            <p className="text-sm text-muted-foreground mt-1">
              {formData.comment.length}/1000 characters
            </p>
            {validationErrors.comment && (
              <p className="text-sm text-destructive mt-1">{validationErrors.comment}</p>
            )}
          </div>

          {/* Image URL (optional) */}
          <div>
            <Label htmlFor="image_url">Image URL (optional)</Label>
            <Input
              id="image_url"
              type="url"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              placeholder="https://example.com/image.jpg"
              className={validationErrors.image_url ? "border-destructive" : ""}
            />
            {validationErrors.image_url && (
              <p className="text-sm text-destructive mt-1">{validationErrors.image_url}</p>
            )}
          </div>

          {/* Authorization Checkbox */}
          <div className="flex items-start gap-3">
            <Checkbox
              id="authorized"
              checked={formData.authorized}
              onCheckedChange={(checked) => setFormData({ ...formData, authorized: checked === true })}
            />
            <Label htmlFor="authorized" className="cursor-pointer leading-normal">
              I authorize NeuraFlow to display this review on their website and marketing materials.
            </Label>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
