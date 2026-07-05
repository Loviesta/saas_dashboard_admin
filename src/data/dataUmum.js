import {
  DollarSign,
  Users,
  UserPlus,
  TrendingDown,
} from "lucide-react";

export const stats = [
  {
    title: "Revenue",
    value: "$48.2K",
    growth: "+12.5%",
    progress: 78,
    positive: true,
    icon: DollarSign,
  },
  {
    title: "Users",
    value: "12,840",
    growth: "+8.2%",
    progress: 62,
    positive: true,
    icon: Users,
  },
  {
    title: "Signups",
    value: "2,560",
    growth: "+15.1%",
    progress: 88,
    positive: true,
    icon: UserPlus,
  },
  {
    title: "Churn",
    value: "2.4%",
    growth: "-0.8%",
    progress: 35,
    positive: false,
    icon: TrendingDown,
  },
];