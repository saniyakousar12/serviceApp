import { motion } from "framer-motion";
import DashboardLayout from "../../components/DashboardLayout";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Icons } from "../../components/icons";
import { bookings } from "../../lib/data";
import { Link } from "react-router-dom";

const customerNavItems = [
  { label: "Home", href: "/customer", icon: "Home" },
  { label: "Search", href: "/customer/search", icon: "Search" },
  { label: "Bookings", href: "/customer/bookings", icon: "Calendar" },
  { label: "Reviews", href: "/customer/reviews", icon: "Star" },
  { label: "Settings", href: "/customer/settings", icon: "Settings" },
];

export default function CustomerBookings() {
  const getStatusVariant = (status) => {
    if (status === "upcoming") return "default";
    if (status === "completed") return "secondary";
    return "destructive";
  };

  const upcoming = bookings.filter((b) => b.status === "upcoming");
  const completed = bookings.filter((b) => b.status === "completed");

  return (
    <DashboardLayout navItems={customerNavItems} currentPath="/customer/bookings">
      <div className="p-5 sm:p-6 lg:p-8 space-y-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold tracking-tight">
            My Bookings
          </h1>
          <p className="text-muted-foreground">
            View and manage your service appointments
          </p>
        </motion.div>

        {/* TABS */}
        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="bg-muted p-1 rounded-xl">
            <TabsTrigger value="upcoming">
              Upcoming ({upcoming.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({completed.length})
            </TabsTrigger>
          </TabsList>

          {/* UPCOMING BOOKINGS */}
          <TabsContent value="upcoming" className="space-y-4">
            {upcoming.length === 0 ? (
              <Card>
                <CardContent className="p-10 text-center">
                  <Icons.Calendar className="w-14 h-14 mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-semibold text-lg">
                    No upcoming bookings
                  </h3>
                  <p className="text-muted-foreground mb-5">
                    You don’t have any scheduled appointments yet
                  </p>
                  <Link to="/customer">
                    <Button>
                      Find a Service
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              upcoming.map((b, i) => (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="hover:shadow-lg transition">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row justify-between gap-6">

                        {/* LEFT */}
                        <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icons.Calendar className="w-6 h-6 text-primary" />
                          </div>

                          <div>
                            <h3 className="font-semibold text-lg">
                              {b.providerName}
                            </h3>
                            <p className="text-muted-foreground">
                              {b.service}
                            </p>

                            <div className="flex gap-4 text-sm mt-2 text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Icons.Calendar className="w-4 h-4" />
                                {b.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Icons.Clock className="w-4 h-4" />
                                {b.time}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex flex-wrap items-center gap-3">
                          <Badge variant={getStatusVariant(b.status)}>
                            {b.status}
                          </Badge>

                          <span className="font-semibold">
                            {b.price}
                          </span>

                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </TabsContent>

          {/* COMPLETED BOOKINGS */}
          <TabsContent value="completed" className="space-y-4">
            {completed.map((b, i) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="hover:shadow-md transition">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row justify-between gap-6">

                      {/* LEFT */}
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                          <Icons.Check className="w-6 h-6 text-muted-foreground" />
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg">
                            {b.providerName}
                          </h3>
                          <p className="text-muted-foreground">
                            {b.service}
                          </p>

                          <div className="flex gap-4 text-sm mt-2 text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Icons.Calendar className="w-4 h-4" />
                              {b.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icons.Clock className="w-4 h-4" />
                              {b.time}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">Completed</Badge>
                        <span className="font-semibold">
                          {b.price}
                        </span>

                        {!b.reviewed ? (
                          <Link to={`/customer/reviews?booking=${b.id}`}>
                            <Button size="sm">
                              <Icons.Star className="w-4 h-4 mr-1" />
                              Leave Review
                            </Button>
                          </Link>
                        ) : (
                          <Badge variant="outline">
                            <Icons.Check className="w-3 h-3 mr-1" />
                            Reviewed
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
