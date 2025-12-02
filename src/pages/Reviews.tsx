import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, PenSquare, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { ReviewSubmissionModal } from "@/components/reviews/ReviewSubmissionModal";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Review {
  id: string;
  name: string;
  location: string | null;
  product: string;
  rating: number;
  comment: string;
  image_url: string | null;
  created_at: string;
  approved: boolean;
}

const REVIEWS_PER_PAGE = 6;

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState<"recent" | "highest" | "lowest">("recent");
  const [filterProduct, setFilterProduct] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      // Use reviews_public view to protect email addresses from exposure
      // Build query with filters and sorting
      let orderColumn = "created_at";
      let ascending = false;
      
      if (sortBy === "highest") {
        orderColumn = "rating";
        ascending = false;
      } else if (sortBy === "lowest") {
        orderColumn = "rating";
        ascending = true;
      }

      let query = supabase
        .from("reviews_public" as any)
        .select("*")
        .order(orderColumn, { ascending });

      // Apply product filter
      if (filterProduct !== "all") {
        query = query.eq("product", filterProduct);
      }

      const { data, error } = await query;

      if (error) throw error;
      setReviews((data as unknown as Review[]) || []);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [sortBy, filterProduct]);

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 5.0;
  
  const totalReviews = reviews.length;
  
  const products = Array.from(new Set(reviews.map(r => r.product)));

  // Pagination
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
  const endIndex = startIndex + REVIEWS_PER_PAGE;
  const paginatedReviews = reviews.slice(startIndex, endIndex);

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
    return `${Math.floor(diffInDays / 365)} years ago`;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-accent-gold text-accent-gold" : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  return (
    <Layout>
      <ReviewSubmissionModal 
        open={modalOpen} 
        onOpenChange={setModalOpen} 
        onSuccess={fetchReviews}
      />

      {/* Hero */}
      <section className="bg-gradient-neural-subtle py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Client Reviews
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              See what our clients say about working with NeuraFlow.
            </p>

            {/* Rating Summary */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-5xl font-bold text-foreground">
                  {averageRating.toFixed(1)}
                </span>
                <div className="flex">
                  {renderStars(5)}
                </div>
              </div>
              <p className="text-muted-foreground">
                Based on {totalReviews} reviews
              </p>
              <Button onClick={() => setModalOpen(true)} size="lg" className="mt-4">
                <PenSquare className="w-5 h-5 mr-2" />
                Write a Review
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 max-w-7xl mx-auto">
            <div className="flex-1">
              <Label htmlFor="sort" className="text-sm font-medium mb-2 block">
                Sort by
              </Label>
              <Select value={sortBy} onValueChange={(value: any) => {
                setSortBy(value);
                setCurrentPage(1);
              }}>
                <SelectTrigger id="sort">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="highest">Highest Rated</SelectItem>
                  <SelectItem value="lowest">Lowest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label htmlFor="filter" className="text-sm font-medium mb-2 block">
                Filter by Product
              </Label>
              <Select value={filterProduct} onValueChange={(value) => {
                setFilterProduct(value);
                setCurrentPage(1);
              }}>
                <SelectTrigger id="filter">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Products</SelectItem>
                  {products.map((product) => (
                    <SelectItem key={product} value={product}>
                      {product}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading reviews...</p>
            </div>
          ) : paginatedReviews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No reviews yet. Be the first to share your experience!</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {paginatedReviews.map((review, index) => (
                  <Card
                    key={review.id}
                    className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12 bg-gradient-neural text-white font-semibold flex items-center justify-center">
                          {review.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground">
                              {review.name}
                            </h3>
                            <Check className="w-4 h-4 text-accent-gold" aria-label="Verified review" />
                          </div>
                          {review.location && (
                            <p className="text-sm text-muted-foreground">
                              {review.location}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Product */}
                    <p className="text-sm text-primary font-medium mb-3">
                      {review.product}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm text-muted-foreground">
                        {getTimeAgo(review.created_at)}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      "{review.comment}"
                    </p>

                    {/* Image if available */}
                    {review.image_url && (
                      <img
                        src={review.image_url}
                        alt="Review"
                        className="w-full h-48 object-cover rounded-md mt-4"
                      />
                    )}
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationLink
                                onClick={() => setCurrentPage(page)}
                                isActive={currentPage === page}
                                className="cursor-pointer"
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        } else if (page === currentPage - 2 || page === currentPage + 2) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          );
                        }
                        return null;
                      })}

                      <PaginationItem>
                        <PaginationNext
                          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground text-center">
                Rating Breakdown
              </h2>
              <div className="space-y-4">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const percentage = stars === 5 ? 100 : 0;
                  return (
                    <div key={stars} className="flex items-center gap-4">
                      <div className="flex items-center gap-1 w-16">
                        <span className="text-sm font-medium text-foreground">
                          {stars}
                        </span>
                        <Star className="w-4 h-4 fill-accent-gold text-accent-gold" />
                      </div>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-gold"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-12 text-right">
                        {percentage}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
