import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Icons, getCategoryIcon } from "../../../components/icons";
import { providers, serviceCategories } from "../../../lib/data";
import { cn } from "../../../lib/utils";

const customerNavItems = [
  { label: "Home", href: "/customer", icon: "Home" },
  { label: "Search", href: "/customer/search", icon: "Search" },
  { label: "Bookings", href: "/customer/bookings", icon: "Calendar" },
  { label: "Reviews", href: "/customer/reviews", icon: "Star" },
  { label: "Settings", href: "/customer/settings", icon: "Settings" },
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

function generateDates() {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

export default function CustomerBook() {
  const { providerId } = useParams();
  const navigate = useNavigate();

  const provider = providers.find((p) => p.id === providerId);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [booking, setBooking] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  if (!provider) {
    return (
      <DashboardLayout navItems={customerNavItems}>
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold">Provider not found</h2>
          <Button className="mt-4" onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  const CategoryIcon = getCategoryIcon(
    serviceCategories.find((c) => c.id === provider.category)?.icon || "Briefcase"
  );

  const dates = generateDates();

  const confirmBooking = async () => {
    setBooking(true);
    setTimeout(() => {
      setBooking(false);
      setConfirmed(true);
    }, 1200);
  };

  return (
    <DashboardLayout navItems={customerNavItems} currentPath="/customer">
      <div className="p-6 lg:p-8">

        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <Icons.ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Provider Info */}
          <Card className="lg:col-span-1 h-fit">
            <CardContent className="p-4 space-y-4">
              <img
                src={provider.image || "/placeholder.svg"}
                alt={provider.name}
                className="rounded-lg w-full h-40 object-cover"
              />

              <h2 className="text-xl font-bold">{provider.name}</h2>

              <Badge variant="secondary" className="flex w-fit gap-1">
                <CategoryIcon className="w-4 h-4" />
                {provider.category}
              </Badge>

              <p className="text-sm text-muted-foreground">
                {provider.bio}
              </p>

              <div className="text-sm space-y-1">
                <p>⭐ {provider.rating} ({provider.reviews} reviews)</p>
                <p>📍 {provider.distance}</p>
                <p className="font-semibold">{provider.price}</p>
              </div>
            </CardContent>
          </Card>

          {/* Booking Section */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Select Date & Time</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">

              {/* Dates */}
              <div>
                <h3 className="font-medium mb-3">Choose Date</h3>
                <div className="grid grid-cols-7 gap-2">
                  {dates.map((d) => {
                    const key = d.toDateString();
                    const selected =
                      selectedDate?.toDateString() === key;

                    return (
                      <button
                        key={key}
                        onClick={() => {
                          setSelectedDate(d);
                          setSelectedTime(null);
                        }}
                        className={cn(
                          "p-2 rounded-lg border text-center text-sm",
                          selected
                            ? "bg-primary text-primary-foreground"
                            : "hover:border-primary"
                        )}
                      >
                        <div className="font-semibold">
                          {d.getDate()}
                        </div>
                        <div className="text-xs">
                          {d.toLocaleDateString("en-US", { weekday: "short" })}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div>
                  <h3 className="font-medium mb-3">Choose Time</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={cn(
                          "p-2 rounded-lg border text-sm",
                          selectedTime === t
                            ? "bg-primary text-primary-foreground"
                            : "hover:border-primary"
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary */}
              {selectedDate && selectedTime && (
                <div className="border-t pt-6 space-y-4">
                  <h3 className="font-medium">Booking Summary</h3>

                  <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-1">
                    <p><b>Service:</b> {provider.name}</p>
                    <p><b>Date:</b> {selectedDate.toDateString()}</p>
                    <p><b>Time:</b> {selectedTime}</p>
                    <p><b>Price:</b> {provider.price}</p>
                  </div>

                  <Button
                    className="w-full"
                    onClick={confirmBooking}
                    disabled={booking}
                  >
                    {booking ? "Confirming..." : "Confirm Booking"}
                  </Button>
                </div>
              )}

              {/* Confirmation */}
              {confirmed && (
                <div className="text-center space-y-3">
                  <Icons.Check className="w-10 h-10 text-green-500 mx-auto" />
                  <h3 className="text-xl font-bold">Booking Confirmed 🎉</h3>
                  <Button onClick={() => navigate("/customer/bookings")}>
                    View My Bookings
                  </Button>
                </div>
              )}

            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
