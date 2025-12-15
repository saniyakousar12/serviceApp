import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { Badge } from "../../components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../../components/ui/dialog";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Icons } from "../../components/icons";
import { bookings, reviews } from "../../lib/data";
import { cn } from "../../lib/utils";

const customerNavItems = [
  { label: "Home", href: "/customer", icon: "Home" },
  { label: "Search", href: "/customer/search", icon: "Search" },
  { label: "Bookings", href: "/customer/bookings", icon: "Calendar" },
  { label: "Reviews", href: "/customer/reviews", icon: "Star" },
  { label: "Settings", href: "/customer/settings", icon: "Settings" },
];

function StarRating({ rating, interactive = false, onChange }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <button
          key={s}
          type="button"
          disabled={!interactive}
          onMouseEnter={() => interactive && setHover(s)}
          onMouseLeave={() => interactive && setHover(0)}
          onClick={() => interactive && onChange(s)}
          className={cn(interactive && "hover:scale-110 transition")}
        >
          <Icons.Star
            className={cn(
              "w-5 h-5",
              (hover || rating) >= s
                ? "text-yellow-400 fill-yellow-400"
                : "text-muted-foreground"
            )}
          />
        </button>
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  const [open, setOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState([]);

  const pendingBookings = bookings.filter(
    (b) => b.status === "completed" && !b.reviewed && !submitted.includes(b.id)
  );

  const myReviews = [
    ...reviews,
    ...submitted.map((id) => ({
      id: `new-${id}`,
      providerName: "Service Provider",
      rating,
      comment,
      date: new Date().toISOString().split("T")[0],
    })),
  ];

  const submitReview = async () => {
    if (!rating) return;
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted([...submitted, selectedBooking.id]);
    setOpen(false);
    setRating(0);
    setComment("");
  };

  return (
    <DashboardLayout navItems={customerNavItems} currentPath="/customer/reviews">
      <div className="p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Reviews</h1>
          <p className="text-muted-foreground">
            Leave feedback for your service providers
          </p>
        </div>

        {/* Pending Reviews */}
        {pendingBookings.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Pending Reviews</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pendingBookings.map((b) => (
                <Card key={b.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {b.providerName.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{b.providerName}</p>
                        <p className="text-sm text-muted-foreground">{b.service}</p>
                      </div>
                    </div>
                    <Button
                      className="w-full"
                      onClick={() => {
                        setSelectedBooking(b);
                        setOpen(true);
                      }}
                    >
                      <Icons.Star className="w-4 h-4 mr-2" />
                      Leave Review
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* My Reviews */}
        <div>
          <h2 className="text-xl font-semibold mb-4">My Reviews</h2>
          {myReviews.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Icons.Star className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No reviews yet</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {myReviews.map((r) => (
                <Card key={r.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{r.providerName}</p>
                        <p className="text-sm text-muted-foreground">{r.date}</p>
                      </div>
                      <StarRating rating={r.rating} />
                    </div>
                    <p className="mt-4 text-muted-foreground">{r.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Review Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Leave a Review</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <StarRating rating={rating} interactive onChange={setRating} />
              <Textarea
                placeholder="Write your feedback..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={submitReview} disabled={!rating}>
                Submit Review
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
