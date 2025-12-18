// import { useState } from "react";
// import DashboardLayout from "../../components/DashboardLayout";
// import { Card, CardContent } from "../../components/ui/card";
// import { Button } from "../../components/ui/button";
// import { providerNavItems } from "./providerNavItems";

// const initialListings = [
//   { id: 1, name: "Pipe Repair", price: "₹500-1000", status: "active" },
//   { id: 2, name: "Drain Cleaning", price: "₹700-1200", status: "inactive" },
// ];

// export default function Listings() {
//   const [listings, setListings] = useState(initialListings);

//   return (
//     <DashboardLayout navItems={providerNavItems} currentPath="/provider/listings">
//       <div className="p-6">
//         <h1 className="text-3xl font-bold mb-6">Listings</h1>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {listings.map((l) => (
//             <Card key={l.id}>
//               <CardContent className="p-4">
//                 <h3 className="font-semibold">{l.name}</h3>
//                 <p className="text-sm text-muted-foreground">{l.price}</p>
//                 <Button size="sm" className="mt-3">
//                   {l.status === "active" ? "Deactivate" : "Activate"}
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import DashboardLayout from "../../components/DashboardLayout";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Badge } from "../../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Icons } from "../../components/icons";
import { providerNavItems } from "./providerNavItems";

const initialListings = [
  {
    id: "1",
    name: "Pipe Repair",
    description: "Fix leaky pipes and replace damaged sections.",
    price: "₹500-1050",
    timeSlots: ["9:00 AM", "11:00 AM", "2:00 PM"],
    image: "/pip_Repair.jpg",
    status: "active",
  },
  {
    id: "2",
    name: "Drain Cleaning",
    description: "Professional drain cleaning service.",
    price: "₹700-1000",
    timeSlots: ["10:00 AM", "1:00 PM"],
    image: "/drain_cleaning.jpg",
    status: "inactive",
  },
  {
    id: "3",
    name: "Water Heater Installation",
    description: "Complete water heater installation and setup.",
    price: "₹900-1200",
    timeSlots: ["9:00 AM", "2:00 PM"],
    image: "/Water_Heater_Installation.png",
    status: "inactive",
  },
];

export default function Listings() {
  const [listings, setListings] = useState(initialListings);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    timeSlots: "",
  });

  const openCreate = () => {
    setEditing(null);
    setForm({ name: "", description: "", price: "", timeSlots: "" });
    setOpen(true);
  };

  const openEdit = (item) => {
    setEditing(item);
    setForm({
      name: item.name,
      description: item.description,
      price: item.price,
      timeSlots: item.timeSlots.join(", "),
    });
    setOpen(true);
  };

  const saveListing = () => {
    if (editing) {
      setListings(
        listings.map((l) =>
          l.id === editing.id
            ? {
                ...l,
                ...form,
                timeSlots: form.timeSlots.split(",").map((t) => t.trim()),
              }
            : l
        )
      );
    } else {
      setListings([
        ...listings,
        {
          id: Date.now().toString(),
          ...form,
          timeSlots: form.timeSlots.split(",").map((t) => t.trim()),
          image: "/placeholder.svg",
          status: "active",
        },
      ]);
    }
    setOpen(false);
  };

  const toggleStatus = (id) => {
    setListings(
      listings.map((l) =>
        l.id === id
          ? { ...l, status: l.status === "active" ? "inactive" : "active" }
          : l
      )
    );
  };

  const removeListing = (id) => {
    setListings(listings.filter((l) => l.id !== id));
  };

  return (
    <DashboardLayout navItems={providerNavItems} currentPath="/provider/listings">
      <motion.div
        className="p-6 lg:p-8 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Service Listings</h1>
            <p className="text-muted-foreground">
              Manage your service offerings
            </p>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button onClick={openCreate}>
                <Icons.Plus className="w-4 h-4 mr-2" />
                New Listing
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editing ? "Edit Listing" : "Create Listing"}
                </DialogTitle>
                <DialogDescription>
                  Add or update your service details
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-4">
                <div>
                  <Label>Service Name</Label>
                  <Input
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label>Price Range</Label>
                  <Input
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label>Time Slots</Label>
                  <Input
                    value={form.timeSlots}
                    onChange={(e) =>
                      setForm({ ...form, timeSlots: e.target.value })
                    }
                    placeholder="9:00 AM, 11:00 AM"
                  />
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={saveListing}>
                  {editing ? "Save Changes" : "Create"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Listings Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          <AnimatePresence>
            {listings.map((l) => (
              <motion.div
                key={l.id}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ scale: 1.03 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative aspect-video bg-muted">
                    <img
                      src={l.image}
                      alt={l.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 right-3">
                      {l.status}
                    </Badge>
                  </div>

                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold text-lg">{l.name}</h3>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {l.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm">
                      <Icons.DollarSign className="w-4 h-4" />
                      {l.price}
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Icons.Clock className="w-4 h-4" />
                      {l.timeSlots.length} time slots
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openEdit(l)}
                      >
                        <Icons.Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleStatus(l.id)}
                      >
                        {l.status === "active" ? "Deactivate" : "Activate"}
                      </Button>

                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-destructive"
                        onClick={() => removeListing(l.id)}
                      >
                        <Icons.Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
}
