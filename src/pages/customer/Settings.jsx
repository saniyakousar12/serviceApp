import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Icons } from "../../components/icons";

const customerNavItems = [
  { label: "Home", href: "/customer", icon: "Home" },
  { label: "Search", href: "/customer/search", icon: "Search" },
  { label: "Bookings", href: "/customer/bookings", icon: "Calendar" },
  { label: "Reviews", href: "/customer/reviews", icon: "Star" },
  { label: "Settings", href: "/customer/settings", icon: "Settings" },
];

export default function CustomerSettings() {
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSaving(false);
  };

  return (
    <DashboardLayout
      navItems={customerNavItems}
      currentPath="/customer/settings"
    >
      <div className="p-6 lg:p-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>

        <div className="space-y-6">
          {/* PROFILE */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    U
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline">
                  <Icons.Upload className="w-4 h-4 mr-2" />
                  Upload Photo
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input placeholder="Himanshu" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="himanshu@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input placeholder="+91 9876543210" />
                </div>
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input placeholder="City or ZIP" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* NOTIFICATIONS */}
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Configure how you receive updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Booking confirmations via email
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Booking Reminders</p>
                  <p className="text-sm text-muted-foreground">
                    Remind before appointments
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Promotional Emails</p>
                  <p className="text-sm text-muted-foreground">
                    Offers and discounts
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* SECURITY */}
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Manage your account security
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Current Password</Label>
                <Input type="password" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>New Password</Label>
                  <Input type="password" />
                </div>
                <div className="space-y-2">
                  <Label>Confirm Password</Label>
                  <Input type="password" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
