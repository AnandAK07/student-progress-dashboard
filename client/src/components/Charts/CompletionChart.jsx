import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

function CompletionChart({ data }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Course Completion</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100} label />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CompletionChart;
