import { motion } from "framer-motion";

import DashboardLayout from "../../components/DashboardLayout";
import { Card, CardContent } from "../../components/ui/card";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { providerNavItems } from "./providerNavItems";
import { Icons } from "../../components/icons";

const reviews = [
  {
    id: 1,
    customer: "Anjali Menon",
    rating: 5,
    comment: "Excellent work! Fixed the issue quickly and professionally.",
    date: "15 Jan 2024",
    service: "Pipe Repair",
  },
  {
    id: 2,
    customer: "Varun Desai",
    rating: 4,
    comment: "Good service, arrived on time and explained everything well.",
    date: "12 Jan 2024",
    service: "Drain Cleaning",
  },
  {
    id: 3,
    customer: "Siddharth Rao",
    rating: 5,
    comment: "Very knowledgeable and friendly. Highly recommended!",
    date: "08 Jan 2024",
    service: "Faucet Installation",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Icons.Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <DashboardLayout navItems={providerNavItems} currentPath="/provider/reviews">
      <motion.div
        className="p-6 lg:p-8 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Reviews</h1>
          <p className="text-muted-foreground">
            See what customers are saying about you
          </p>
        </div>

        {/* Rating Summary */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-6 flex items-center gap-6">
              <div className="text-center">
                <p className="text-5xl font-bold">{averageRating}</p>
                <StarRating rating={Math.round(averageRating)} />
                <p className="text-sm text-muted-foreground mt-1">
                  {reviews.length} reviews
                </p>
              </div>

              <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const count = reviews.filter(
                    (r) => r.rating === stars
                  ).length;
                  const percentage = (count / reviews.length) * 100;

                  return (
                    <div key={stars} className="flex items-center gap-3">
                      <span className="text-sm w-6">{stars}</span>
                      <Icons.Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-yellow-400"
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <span className="text-sm w-8 text-muted-foreground">
                        {count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {review.customer.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-medium">
                            {review.customer}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {review.service}
                          </p>
                        </div>
                        <div className="text-right">
                          <StarRating rating={review.rating} />
                          <p className="text-sm text-muted-foreground mt-1">
                            {review.date}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
