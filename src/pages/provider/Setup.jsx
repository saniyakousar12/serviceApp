// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../../components/ui/button";
// import { Card, CardContent } from "../../components/ui/card";

// export default function Setup() {
//   const [step, setStep] = useState(1);
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <Card className="w-full max-w-lg">
//         <CardContent className="p-6">
//           <h2 className="text-xl font-bold mb-4">Setup Step {step}</h2>

//           {step < 3 ? (
//             <Button onClick={() => setStep(step + 1)}>Next</Button>
//           ) : (
//             <Button onClick={() => navigate("/provider")}>Finish</Button>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Icons, getCategoryIcon } from "../../components/icons";
import { serviceCategories } from "../../lib/data";
import { cn } from "../../lib/utils";
// import { useAuth } from "../../lib/auth-context"; // jab auth ready ho

export default function ProviderSetup() {
  // const { updateUser } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    category: "",
    bio: "",
    serviceArea: "",
    portfolio: [],
  });

  const handleNext = () => step < 3 && setStep(step + 1);
  const handleBack = () => step > 1 && setStep(step - 1);

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    // updateUser({ profileComplete: true });
    navigate("/provider");
  };

  const handleImageUpload = () => {
    const img = `/placeholder.svg?text=Work+${formData.portfolio.length + 1}`;
    setFormData({
      ...formData,
      portfolio: [...formData.portfolio, img],
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 ">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icons.Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">QuickServe</span>
          </Link>
          <h1 className="text-2xl font-bold">Complete Your Profile</h1>
          <p className="text-muted-foreground">
            Let’s set up your service provider profile
          </p>
        </div>

        {/* Steps */}
        <div className="flex justify-center mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-medium",
                  s === step
                    ? "bg-primary text-primary-foreground"
                    : s < step
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {s < step ? <Icons.Check className="w-5 h-5" /> : s}
              </div>
              {s < 3 && (
                <div
                  className={cn(
                    "w-16 h-1 mx-2",
                    s < step ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </div>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {step === 1 && "Service Category"}
              {step === 2 && "About Your Service"}
              {step === 3 && "Portfolio & Area"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "What type of service do you offer?"}
              {step === 2 && "Tell customers about your expertise"}
              {step === 3 && "Add work samples and service location"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            {/* STEP 1 */}
            {step === 1 && (
              <div className="grid grid-cols-2 gap-4">
                {serviceCategories.map((cat) => {
                  const Icon = getCategoryIcon(cat.icon);
                  return (
                    <button
                      key={cat.id}
                      onClick={() =>
                        setFormData({ ...formData, category: cat.id })
                      }
                      className={cn(
                        "p-4 rounded-xl border-2 flex flex-col items-center gap-2",
                        formData.category === cat.id
                          ? "border-primary bg-primary/5"
                          : "border-border"
                      )}
                    >
                      <Icon className="w-8 h-8" />
                      <span className="text-sm font-medium">{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-2">
                <Label>Bio</Label>
                <Textarea
                  rows={5}
                  value={formData.bio}
                  onChange={(e) =>
                    setFormData({ ...formData, bio: e.target.value })
                  }
                />
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  {formData.portfolio.map((img, i) => (
                    <img key={i} src={img} alt="" className="rounded-lg" />
                  ))}
                  <button
                    onClick={handleImageUpload}
                    className="border-2 border-dashed rounded-lg flex items-center justify-center"
                  >
                    <Icons.Upload />
                  </button>
                </div>

                <div>
                  <Label>Service Area</Label>
                  <Input
                    value={formData.serviceArea}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        serviceArea: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={handleBack} disabled={step === 1}>
                Back
              </Button>

              {step < 3 ? (
                <Button
                  onClick={handleNext}
                  disabled={step === 1 && !formData.category}
                >
                  Next
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={loading}>
                  {loading ? "Saving..." : "Complete Setup"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
