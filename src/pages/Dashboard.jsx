import WelcomeCard from "../components/cards/WelcomeCard";
import StatCard from "../components/cards/StatCard";
import RevenueChart from "../components/charts/RevenueChart";
import ActivityList from "../components/activity/ActivityList";
import TargetAnalysis from "../components/cards/TargetAnalysis";

import { stats } from "../data/DashboardData";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      <WelcomeCard />

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <StatCard
              key={item.title}
              title={item.title}
              value={item.value}
              growth={item.growth}
              progress={item.progress}
              positive={item.positive}
              icon={<Icon size={24} />}
            />
          );
        })}
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        <ActivityList />

      </div>

      {/* Target */}
      <TargetAnalysis />

    </div>
  );
}