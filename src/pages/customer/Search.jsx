import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import DashboardLayout from "../../components/DashboardLayout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Icons } from "../../components/icons";
import { providers, serviceCategories } from "../../lib/data";
import { cn } from "../../lib/utils";

const customerNavItems = [
  { label: "Home", href: "/customer", icon: "Home" },
  { label: "Search", href: "/customer/search", icon: "Search" },
  { label: "Bookings", href: "/customer/bookings", icon: "Calendar" },
  { label: "Reviews", href: "/customer/reviews", icon: "Star" },
  { label: "Settings", href: "/customer/settings", icon: "Settings" },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Icons.Star
          key={s}
          className={cn(
            "w-3.5 h-3.5",
            s <= rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-muted-foreground"
          )}
        />
      ))}
    </div>
  );
}

export default function CustomerSearch() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const filteredProviders = providers
    .filter((p) => {
      const matchQuery =
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.bio.toLowerCase().includes(query.toLowerCase());
      const matchCategory = category === "all" || p.category === category;
      return matchQuery && matchCategory;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      return 0;
    });

  return (
    <DashboardLayout navItems={customerNavItems} currentPath="/customer/search">
      <div className="p-5 sm:p-6 lg:p-8 font-sans">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight">
            Search Services
          </h1>
          <p className="text-muted-foreground mt-1">
            Find trusted professionals near you
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6">

          {/* FILTERS */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-6">
              <CardContent className="p-4 space-y-6">

                {/* Search */}
                <div>
                  <label className="text-sm font-medium">Search</label>
                  <div className="relative mt-2">
                    <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <Input
                      className="pl-14 h-11"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="text-sm font-medium">Location</label>
                  <div className="relative mt-2">
                    <Icons.MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <Input
                      className="pl-14 h-11"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <select
                    className="w-full mt-2 h-11 rounded-md border bg-background px-3 text-sm"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    {serviceCategories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div>
                  <label className="text-sm font-medium">Sort By</label>
                  <select
                    className="w-full mt-2 h-11 rounded-md border bg-background px-3 text-sm"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="rating">Highest Rated</option>
                    <option value="reviews">Most Reviews</option>
                  </select>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setQuery("");
                    setLocation("");
                    setCategory("all");
                    setSortBy("rating");
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* RESULTS */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-sm text-muted-foreground">
              {filteredProviders.length} results found
            </p>

            {filteredProviders.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="hover:shadow-lg transition">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">

                      <div className="sm:w-48 h-48 bg-muted">
                        <img
                          src={p.image || "/placeholder.svg"}
                          alt={p.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 p-4 space-y-2">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold">
                            {p.name}
                          </h3>
                          <Badge variant="secondary">
                            {p.category}
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {p.bio}
                        </p>

                        <div className="flex items-center gap-2 text-sm">
                          <StarRating rating={Math.floor(p.rating)} />
                          <span className="font-medium">{p.rating}</span>
                          <span className="text-muted-foreground">
                            ({p.reviews})
                          </span>
                        </div>

                        <div className="flex justify-between items-center pt-2">
                          <span className="text-sm text-muted-foreground">
                            <Icons.MapPin className="w-4 h-4 inline mr-1" />
                            {p.distance}
                          </span>
                          <span className="font-semibold">
                            {p.price}
                          </span>
                        </div>

                        <Button
                          className="mt-3"
                          onClick={() =>
                            navigate(`/customer/book/${p.id}`)
                          }
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
