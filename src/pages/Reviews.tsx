import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "TechStart Solutions",
      role: "CEO",
      rating: 5,
      date: "2 weeks ago",
      review: "NeuraFlow transformed our customer support with their AI chatbot. Response times went from hours to seconds, and our team can now focus on complex issues. Outstanding service and support!",
      avatar: "RK",
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Urban Realty",
      role: "Sales Director",
      rating: 5,
      date: "1 month ago",
      review: "The CRM system they built for us is exactly what we needed. Lead management is now completely automated, and our conversion rates have increased by 40%. Highly recommended!",
      avatar: "PS",
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "FastLogistics",
      role: "Operations Manager",
      rating: 5,
      date: "1 month ago",
      review: "The attendance automation system has been a game-changer for managing our field workforce. GPS tracking, instant reports, and zero manual work. Worth every rupee!",
      avatar: "AP",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      company: "Fashion Forward",
      role: "Founder",
      rating: 5,
      date: "2 months ago",
      review: "Our e-commerce operations were drowning in manual work. NeuraFlow's automation workflows saved us 90% of processing time. Their team is professional and delivers on promises.",
      avatar: "SR",
    },
    {
      id: 5,
      name: "Vikram Singh",
      company: "CloudTech India",
      role: "CTO",
      rating: 5,
      date: "2 months ago",
      review: "Excellent technical expertise and understanding of business needs. They integrated our entire tech stack seamlessly. The API integrations work flawlessly.",
      avatar: "VS",
    },
    {
      id: 6,
      name: "Anita Desai",
      company: "EduLearn Academy",
      role: "Director",
      rating: 5,
      date: "3 months ago",
      review: "The WhatsApp bot they created for us handles student inquiries 24/7. Parents love the instant responses, and our staff workload has reduced significantly. Great investment!",
      avatar: "AD",
    },
  ];

  const averageRating = 5.0;
  const totalReviews = reviews.length;

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
            <div className="flex flex-col items-center gap-2">
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
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={review.id}
                className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 bg-gradient-neural text-white font-semibold flex items-center justify-center">
                      {review.avatar}
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {review.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Company */}
                <p className="text-sm text-primary font-medium mb-3">
                  {review.company}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="text-sm text-muted-foreground">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed">
                  "{review.review}"
                </p>
              </Card>
            ))}
          </div>
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
