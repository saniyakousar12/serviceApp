import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import DashboardLayout from "../../components/DashboardLayout";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";
import { Icons } from "../../components/icons";
import { providerNavItems } from "./providerNavItems";

const bookingsData = [
  {
    id: "1",
    customer: "Amit Sharma",
    email: "amit.sharma@example.com",
    service: "Pipe Repair",
    date: "22 Jan 2024",
    time: "2:00 PM",
    status: "upcoming",
    price: "₹850",
  },
  {
    id: "2",
    customer: "Sneha Verma",
    email: "sneha.verma@example.com",
    service: "Drain Cleaning",
    date: "23 Jan 2024",
    time: "10:00 AM",
    status: "upcoming",
    price: "₹650",
  },
  {
    id: "3",
    customer: "Rohit Kapoor",
    email: "rohit.kapoor@example.com",
    service: "Faucet Installation",
    date: "15 Jan 2024",
    time: "3:00 PM",
    status: "completed",
    price: "₹1200",
  },
  {
    id: "4",
    customer: "Karan Mehta",
    email: "karan.mehta@example.com",
    service: "Water Heater Check",
    date: "10 Jan 2024",
    time: "9:00 AM",
    status: "cancelled",
    price: "₹550",
  },
];

export default function Bookings() {
  const [bookings] = useState(bookingsData);

  const filterBookings = (status) => {
    if (status === "all") return bookings;
    return bookings.filter((b) => b.status === status);
  };

  const badgeVariant = (status) => {
    if (status === "upcoming") return "default";
    if (status === "completed") return "secondary";
    return "destructive";
  };

  return (
    <DashboardLayout navItems={providerNavItems} currentPath="/provider/bookings">
      <motion.div
        className="p-6 lg:p-8 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Bookings</h1>
          <p className="text-muted-foreground">
            Manage your customer appointments
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          {["all", "upcoming", "completed", "cancelled"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b text-muted-foreground">
                          <th className="text-left p-4">Customer</th>
                          <th className="text-left p-4">Service</th>
                          <th className="text-left p-4">Date & Time</th>
                          <th className="text-left p-4">Price</th>
                          <th className="text-left p-4">Status</th>
                          <th className="text-right p-4">Actions</th>
                        </tr>
                      </thead>

                      <AnimatePresence>
                        <tbody>
                          {filterBookings(tab).map((b) => (
                            <motion.tr
                              key={b.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="border-b last:border-0 hover:bg-muted/40"
                            >
                              <td className="p-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Icons.User className="w-5 h-5 text-primary" />
                                  </div>
                                  <div>
                                    <p className="font-medium">{b.customer}</p>
                                    <p className="text-sm text-muted-foreground">
                                      {b.email}
                                    </p>
                                  </div>
                                </div>
                              </td>

                              <td className="p-4">{b.service}</td>

                              <td className="p-4">
                                <p className="font-medium">{b.date}</p>
                                <p className="text-sm text-muted-foreground">
                                  {b.time}
                                </p>
                              </td>

                              <td className="p-4 font-medium">{b.price}</td>

                              <td className="p-4">
                                <Badge variant={badgeVariant(b.status)}>
                                  {b.status}
                                </Badge>
                              </td>

                              <td className="p-4 text-right">
                                {b.status === "upcoming" && (
                                  <div className="flex justify-end gap-2">
                                    <Button size="sm" variant="outline">
                                      Reschedule
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      className="text-destructive"
                                    >
                                      Cancel
                                    </Button>
                                  </div>
                                )}
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </AnimatePresence>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </DashboardLayout>
  );
}
