

import {
  Home,
  Briefcase,
  Calendar,
  Star,
  Settings,
  User,
  Zap,
  DollarSign,
  IndianRupee,
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
  LogOut,
  Search,      // ✅ ADD
  MapPin,      // ✅ ADD
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
  IndianRupee,
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
  LogOut,
  Search,
  MapPin,
};

export function getCategoryIcon(name) {
  return Icons[name] || Icons.Briefcase;
}
