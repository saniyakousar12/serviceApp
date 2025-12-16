// import DashboardLayout from "../../components/DashboardLayout";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
// import { Button } from "../../components/ui/button";
// import { Badge } from "../../components/ui/badge";
// import { Icons } from "../../components/icons";
// import { providerNavItems } from "./providerNavItems";

// const stats = [
//   { label: "Total Bookings", value: "47", icon: Icons.Calendar },
//   { label: "Revenue", value: "₹2,450", icon: Icons.DollarSign },
//   { label: "Rating", value: "4.8", icon: Icons.Star },
//   { label: "Customers", value: "32", icon: Icons.Users },
// ];

// const upcomingBookings = [
//   { id: 1, customer: "Suraj Rajput", service: "Pipe Repair", date: "Today", time: "2:00 PM", status: "confirmed" },
//   { id: 2, customer: "Saurav Yadav", service: "Drain Cleaning", date: "Tomorrow", time: "10:00 AM", status: "pending" },
// ];

// export default function ProviderDashboard() {
//   return (
//     <DashboardLayout navItems={providerNavItems} currentPath="/provider">
//       <div className="p-6">
//         <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//           {stats.map((s) => (
//             <Card key={s.label}>
//               <CardContent className="p-6">
//                 <s.icon className="w-5 h-5 mb-2 text-muted-foreground" />
//                 <p className="text-2xl font-bold">{s.value}</p>
//                 <p className="text-sm text-muted-foreground">{s.label}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <Card>
//           <CardHeader>
//             <CardTitle>Upcoming Bookings</CardTitle>
//             <CardDescription>Your scheduled appointments</CardDescription>
//           </CardHeader>
//           <CardContent>
//             {upcomingBookings.map((b) => (
//               <div key={b.id} className="flex justify-between p-4 bg-muted/50 rounded mb-3">
//                 <div>
//                   <p className="font-medium">{b.customer}</p>
//                   <p className="text-sm text-muted-foreground">{b.service}</p>
//                 </div>
//                 <Badge>{b.status}</Badge>
//               </div>
//             ))}
//           </CardContent>
//         </Card>
//       </div>
//     </DashboardLayout>
//   );
// }

import DashboardLayout from "../../components/DashboardLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Icons } from "../../components/icons";
import { providerNavItems } from "./providerNavItems";
import { motion } from "framer-motion";

const stats = [
  { label: "Total Bookings", value: "47", icon: Icons.Calendar, color: "text-blue-500" },
  { label: "Revenue", value: "₹2,450", icon: Icons.DollarSign, color: "text-green-500" },
  { label: "Rating", value: "4.8", icon: Icons.Star, color: "text-yellow-500" },
  { label: "Customers", value: "32", icon: Icons.Users, color: "text-purple-500" },
];

const upcomingBookings = [
  {
    id: 1,
    customer: "Suraj Rajput",
    service: "Pipe Repair",
    date: "Today",
    time: "2:00 PM",
    status: "confirmed",
  },
  {
    id: 2,
    customer: "Saurav Yadav",
    service: "Drain Cleaning",
    date: "Tomorrow",
    time: "10:00 AM",
    status: "pending",
  },
];

export default function ProviderDashboard() {
  return (
    <DashboardLayout navItems={providerNavItems} currentPath="/provider">
      <motion.div
        className="p-6 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Welcome back! Here’s an overview of your activity.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                    <p className="text-2xl font-bold mt-1">{s.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl bg-muted ${s.color}`}>
                    <s.icon className="w-6 h-6" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Bookings</CardTitle>
                <CardDescription>
                  Your scheduled appointments
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>

            <CardContent className="space-y-4">
              {upcomingBookings.map((b) => (
                <motion.div
                  key={b.id}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-4 rounded-xl border bg-muted/40"
                >
                  <div>
                    <p className="font-medium">{b.customer}</p>
                    <p className="text-sm text-muted-foreground">
                      {b.service} • {b.date} at {b.time}
                    </p>
                  </div>

                  <Badge
                    variant={
                      b.status === "confirmed" ? "default" : "secondary"
                    }
                  >
                    {b.status}
                  </Badge>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
}
