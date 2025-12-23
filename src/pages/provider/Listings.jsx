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
} from "../../components/ui/dialog";
import { Icons } from "../../components/icons";
import { providerNavItems } from "./providerNavItems";

/* ===== Available Time Slots ===== */
const AVAILABLE_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "03:00 PM",
  "04:00 PM",
  
];

/* ===== Initial Listings ===== */
const initialListings = [
  {
    id: "1",
    name: "Pipe Repair",
    description: "Fix leaky pipes and replace damaged sections.",
    price: "₹500-1050",
    date: "2025-12-26",
    timeSlots: [],
    image: "/pip_Repair.jpg",
    status: "active",
  },
  {
    id: "2",
    name: "Drain Cleaning",
    description: "Professional drain cleaning service.",
    price: "₹700-1000",
    date: "2025-12-27",
    timeSlots: ["12:00 PM", "03:00 PM"],
    image: "/drain_cleaning.jpg",
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
    date: "",
    timeSlots: [],
  });

  /* ===== Open Create (EMPTY FORM) ===== */
  const openCreate = () => {
    setEditing(null);
    setForm({
      name: "",
      description: "",
      price: "",
      date: "",
      timeSlots: [],
    });
    setOpen(true);
  };

  /* ===== Open Edit ===== */
  const openEdit = (item) => {
    setEditing(item);
    setForm({
      name: item.name,
      description: item.description,
      price: item.price,
      date: item.date,
      timeSlots: item.timeSlots,
    });
    setOpen(true);
  };

  /* ===== Save Listing ===== */
  const saveListing = () => {
    if (!form.date || form.timeSlots.length === 0) return;

    if (editing) {
      setListings(
        listings.map((l) =>
          l.id === editing.id ? { ...l, ...form } : l
        )
      );
    } else {
      setListings([
        ...listings,
        {
          id: Date.now().toString(),
          ...form,
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
      >
        {/* ===== Header ===== */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Service Listings</h1>
            <p className="text-muted-foreground">
              Manage your service offerings
            </p>
          </div>

          <Button onClick={openCreate}>
            <Icons.Plus className="w-4 h-4 mr-2" />
            New Listing
          </Button>
        </div>

        {/* ===== Dialog ===== */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editing ? "Edit Listing" : "Create Listing"}
              </DialogTitle>
              <DialogDescription>
                Add or update service availability
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

              {/* Date Picker */}
              <div>
                <Label>Select Date</Label>
                <Input
                  type="date"
                  value={form.date}
                  onChange={(e) =>
                    setForm({ ...form, date: e.target.value })
                  }
                />
              </div>

              {/* Time Slots */}
              <div>
                <Label>Available Time Slots</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                  {AVAILABLE_SLOTS.map((slot) => {
                    const selected = form.timeSlots.includes(slot);
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            timeSlots: selected
                              ? prev.timeSlots.filter((s) => s !== slot)
                              : [...prev.timeSlots, slot],
                          }))
                        }
                        className={`border rounded-lg py-2 text-sm font-medium transition
                          ${
                            selected
                              ? "bg-primary text-white border-primary"
                              : "bg-white hover:bg-muted"
                          }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
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

        {/* ===== Listings Grid ===== */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {listings.map((l) => (
              <motion.div key={l.id} whileHover={{ scale: 1.03 }}>
                <Card className="overflow-hidden">
                  <div className="relative aspect-video">
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
                    <p className="text-sm text-muted-foreground">
                      {l.description}
                    </p>

                    <p className="text-sm flex gap-2 items-center">
                      <Icons.Calendar className="w-4 h-4" />
                      {l.date}
                    </p>

                    <p className="text-sm flex gap-2 items-center">
                      <Icons.Clock className="w-4 h-4" />
                      {l.timeSlots.join(", ")}
                    </p>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" onClick={() => openEdit(l)}>
                        <Icons.Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>

                      <Button size="sm" variant="outline" onClick={() => toggleStatus(l.id)}>
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
