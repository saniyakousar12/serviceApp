import {
  Home,
  Briefcase,
  Calendar,
  Star,
  Settings,
  User,
  Zap,
  DollarSign,
  Users,
  Plus,
  Edit,
  Trash2,
  Clock,
  Upload,
  ChevronLeft,
  ChevronRight,
  Check,
  Wrench,
  Sparkles,
  Brush,
  LogOut,   // ✅ ADD THIS
} from "lucide-react";

export const Icons = {
  Home,
  Briefcase,
  Calendar,
  Star,
  Settings,
  User,
  Zap,
  DollarSign,
  Users,
  Plus,
  Edit,
  Trash2,
  Clock,
  Upload,
  ChevronLeft,
  ChevronRight,
  Check,
  Wrench,
  Sparkles,
  Brush,
  LogOut,   // ✅ ADD THIS
};

export function getCategoryIcon(name) {
  return Icons[name] || Icons.Briefcase;
}
