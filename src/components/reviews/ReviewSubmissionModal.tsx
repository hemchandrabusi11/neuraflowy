import { useState } from "react";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.product || !formData.rating || !formData.comment) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (!formData.authorized) {
      toast({
        title: "Authorization required",
        description: "Please authorize us to display your review",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert review into database
      const { error: dbError } = await supabase
        .from("reviews")
        .insert({
          name: formData.name.trim(),
          location: formData.location.trim() || null,
          email: formData.email.trim() || null,
          product: formData.product,
          rating: formData.rating,
          comment: formData.comment.trim(),
          image_url: formData.image_url.trim() || null,
          approved: false
        });

      if (dbError) throw dbError;

      // Send webhook notification
      try {
        await supabase.functions.invoke("review-webhook", {
          body: {
            name: formData.name,
            email: formData.email,
            rating: formData.rating,
            comment: formData.comment,
            product: formData.product,
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
              required
              maxLength={100}
            />
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
            />
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
            />
          </div>

          {/* Product/Service */}
          <div>
            <Label htmlFor="product">Product / Service *</Label>
            <Select value={formData.product} onValueChange={(value) => setFormData({ ...formData, product: value })}>
              <SelectTrigger>
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
              required
              maxLength={1000}
              className="resize-none"
            />
            <p className="text-sm text-muted-foreground mt-1">
              {formData.comment.length}/1000 characters
            </p>
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
            />
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
