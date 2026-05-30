import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/StatCard/StatCard";
import ProgressChart from "../../components/Charts/ProgressChart";
import CompletionChart from "../../components/Charts/CompletionChart";
import { useEffect, useState } from "react";
import { getDashboardData } from "../../services/dashboardService";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDashboardData();

      setDashboard(data);
    };

    fetchData();
  }, []);

  if (!dashboard) {
    return (
      <DashboardLayout>
        <h2>Loading...</h2>
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Completed Lessons"
          value={dashboard.completedLessons}
        />

        <StatCard title="Time Spent" value={`${dashboard.timeSpent} hrs`} />

        <StatCard title="Courses Enrolled" value={dashboard.coursesEnrolled} />

        <StatCard
          title="Completion Rate"
          value={`${dashboard.completionRate}%`}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <ProgressChart data={dashboard.trendData} />

        <CompletionChart data={dashboard.completionData} />
      </div>
      <div className="bg-white rounded-lg shadow p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

        <ul className="space-y-3">
          {dashboard.recentActivities.map((activity) => (
            <li key={activity._id}>{activity.description}</li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
