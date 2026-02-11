"use client";

import SidebarLayout from "@/components/admin_components/sidebar_admin_components/SidebarComponents";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4780 },
  { month: "May", revenue: 5890 },
  { month: "Jun", revenue: 6390 },
];

const carSalesData = [
  { name: "BMW", sales: 12 },
  { name: "Audi", sales: 19 },
  { name: "Mercedes", sales: 8 },
  { name: "VW", sales: 14 },
];

const serviceData = [
  { name: "Repair", value: 40 },
  { name: "Maintenance", value: 30 },
  { name: "Diagnostics", value: 20 },
  { name: "Other", value: 10 },
];

const COLORS = ["#D4AF37", "#111111", "#555555", "#999999"];

export default function Dashboard() {
  return (
    <SidebarLayout>
      <div className="space-y-10">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#0D0D0D]">
            Dashboard
          </h1>
          <p className="text-gray-500">
            Overview of your business performance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Total Revenue", value: "$32,500" },
            { title: "Cars Sold", value: "53" },
            { title: "Active Services", value: "12" },
            { title: "Customers", value: "148" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-gray-500 text-sm">{item.title}</h3>
              <p className="text-2xl font-bold text-[#0D0D0D] mt-2">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4 text-[#0D0D0D]">
              Monthly Revenue
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#D4AF37"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Sales */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4 text-[#0D0D0D]">
              Car Brand Sales
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={carSalesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="sales"
                  fill="#D4AF37"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Services */}
          <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4 text-[#0D0D0D]">
              Service Distribution
            </h2>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={serviceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="value"
                  label
                >
                  {serviceData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}


