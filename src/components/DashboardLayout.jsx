import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Icons } from "../components/icons";

export default function DashboardLayout({
  title = "Dashboard",
  navItems = [],
  currentPath,
  children,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-background">

      {/* SIDEBAR */}
      <motion.aside
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-64 border-r bg-card flex flex-col"
      >
        {/* TITLE / LOGO */}
        <div className="p-5 border-b">
          <h2 className="text-xl font-bold tracking-tight">
            {title}
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            QuickServe Dashboard
          </p>
        </div>

        {/* NAV ITEMS */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item, index) => {
            const Icon = Icons[item.icon];
            const active = currentPath === item.href;

            return (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => navigate(item.href)}
                className={`relative w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition
                  ${
                    active
                      ? "bg-primary text-primary-foreground shadow"
                      : "hover:bg-muted text-foreground"
                  }`}
              >
                {Icon && <Icon className="w-5 h-5" />}
                {item.label}

                {/* ACTIVE INDICATOR */}
                {active && (
                  <motion.span
                    layoutId="active-indicator"
                    className="absolute right-2 w-2 h-2 rounded-full bg-primary-foreground"
                  />
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* LOGOUT */}
        <div className="p-3 border-t">
          <Button
            variant="ghost"
            className="w-full justify-start text-destructive hover:bg-destructive/10"
            onClick={handleLogout}
          >
            <Icons.LogOut className="w-5 h-5 mr-2" />
            Logout
          </Button>
        </div>
      </motion.aside>

      {/* MAIN CONTENT */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1 bg-muted/30 overflow-y-auto"
      >
        {children}
      </motion.main>
    </div>
  );
}
