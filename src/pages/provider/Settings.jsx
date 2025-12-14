import { useState } from "react";
import { motion } from "framer-motion";

import DashboardLayout from "../../components/DashboardLayout";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Switch } from "../../components/ui/switch";
import { Icons } from "../../components/icons";
import { providerNavItems } from "./providerNavItems";

export default function Settings() {
  const [saving, setSaving] = useState(false);

  const user = {
    name: "Plumber Pro",
    email: "plumber@example.com",
  };

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSaving(false);
  };

  return (
    <DashboardLayout navItems={providerNavItems} currentPath="/provider/settings">
      <motion.div
        className="p-6 lg:p-8 max-w-3xl space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>

        {/* Profile Information */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your business profile details
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <Button variant="outline">
                  <Icons.Upload className="w-4 h-4 mr-2" />
                  Upload Photo
                </Button>
              </div>

              {/* Inputs */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Business Name</Label>
                  <Input defaultValue={user.name} />
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" defaultValue={user.email} />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Bio</Label>
                <Textarea
                  rows={4}
                  defaultValue="15+ years of experience in residential and commercial plumbing. Licensed and insured."
                />
              </div>

              <div className="space-y-2">
                <Label>Service Area</Label>
                <Input defaultValue="New York, NY" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Configure how you receive notifications
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {[
                {
                  title: "Email Notifications",
                  desc: "Receive booking confirmations via email",
                },
                {
                  title: "New Booking Alerts",
                  desc: "Get notified when you receive a new booking",
                },
                {
                  title: "Review Notifications",
                  desc: "Be notified when customers leave reviews",
                },
              ].map((n) => (
                <div
                  key={n.title}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">{n.title}</p>
                    <p className="text-sm text-muted-foreground">{n.desc}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
}
