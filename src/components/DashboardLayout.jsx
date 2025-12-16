// import { Link } from "react-router-dom";
// import { Icons } from "./icons";
// import { cn } from "../lib/utils";

// export default function DashboardLayout({
//   children,
//   navItems = [],
//   currentPath = "",
// }) {
//   return (
//     <div className="min-h-screen flex bg-background">
//       {/* SIDEBAR */}
//       <aside className="w-64 border-r border-border hidden md:flex flex-col">
//         <div className="h-16 flex items-center px-6 border-b border-border">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
//               <Icons.Zap className="w-5 h-5 text-primary-foreground" />
//             </div>
//             <span className="font-bold text-lg">QuickServe</span>
//           </div>
//         </div>

//         <nav className="flex-1 p-4 space-y-1">
//           {navItems.map((item) => {
//             const Icon = Icons[item.icon];
//             const isActive = currentPath === item.href;

//             return (
//               <Link
//                 key={item.href}
//                 to={item.href}
//                 className={cn(
//                   "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
//                   isActive
//                     ? "bg-primary text-primary-foreground"
//                     : "text-muted-foreground hover:bg-muted"
//                 )}
//               >
//                 {Icon && <Icon className="w-4 h-4" />}
//                 <span>{item.label}</span>
//               </Link>
//             );
//           })}
//         </nav>
//       </aside>

//       {/* MAIN CONTENT */}
//       <div className="flex-1 flex flex-col">
//         {/* TOPBAR */}
//         <header className="h-16 border-b border-border flex items-center justify-between px-6">
//           <p className="font-medium">Provider Panel</p>

//           <div className="flex items-center gap-3">
//             <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
//               <Icons.User className="w-5 h-5 text-primary" />
//             </div>
//           </div>
//         </header>

//         {/* PAGE CONTENT */}
//         <main className="flex-1 overflow-y-auto">{children}</main>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Icons } from "../components/icons";

export default function DashboardLayout({
  navItems = [],
  currentPath,
  children,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // future: clear auth / token
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* SIDEBAR */}
      <aside className="w-64 border-r bg-card flex flex-col">
        {/* LOGO / TITLE */}
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Provider Panel</h2>
        </div>

        {/* NAV ITEMS */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = Icons[item.icon];
            const active = currentPath === item.href;

            return (
              <button
                key={item.label}
                onClick={() => navigate(item.href)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition
                  ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-foreground"
                  }`}
              >
                {Icon && <Icon className="w-5 h-5" />}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* LOGOUT (BOTTOM) */}
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
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-muted/30 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
