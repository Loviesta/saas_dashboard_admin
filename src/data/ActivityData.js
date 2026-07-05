import {
  UserPlus,
  ShieldCheck,
  Database,
  Bell,
} from "lucide-react";

export const activities = [
  {
    id: 1,
    title: "New user registered",
    description: "Andi Pratama joined the platform.",
    time: "2 minutes ago",
    icon: UserPlus,
    color: "text-blue-400",
  },
  {
    id: 2,
    title: "Admin role updated",
    description: "Sinta changed user permissions.",
    time: "15 minutes ago",
    icon: ShieldCheck,
    color: "text-purple-400",
  },
  {
    id: 3,
    title: "Database backup completed",
    description: "Automatic daily backup finished.",
    time: "1 hour ago",
    icon: Database,
    color: "text-green-400",
  },
  {
    id: 4,
    title: "New notification",
    description: "12 new users signed up today.",
    time: "Today",
    icon: Bell,
    color: "text-yellow-400",
  },
];