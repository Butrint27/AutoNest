import SidebarLayout from "@/components/admin_components/sidebar_admin_components/SidebarComponents";


export default function Dashboard() {
  return (
    <SidebarLayout>
      <h1 className="text-3xl font-bold mb-6">Welcome to Auto Salon Dashboard</h1>
      <p>Here you can manage cars, services, and view statistics.</p>
    </SidebarLayout>
  );
}
