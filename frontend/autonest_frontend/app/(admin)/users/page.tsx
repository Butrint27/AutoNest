"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SidebarLayout from "@/components/admin_components/sidebar_admin_components/SidebarComponents";
import { FaSearch } from "react-icons/fa";

// -----------------
// Types
// -----------------
type UserRole = "Admin" | "Manager" | "User";
type UserStatus = "Active" | "Inactive";

type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
};

// -----------------
// Dummy Data
// -----------------
const dummyUsersInitial: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Sarah Miller", email: "sarah@example.com", role: "Manager", status: "Active" },
  { id: 3, name: "Michael Brown", email: "michael@example.com", role: "User", status: "Inactive" },
  { id: 4, name: "Emma Wilson", email: "emma@example.com", role: "User", status: "Active" },
  { id: 5, name: "David Clark", email: "david@example.com", role: "User", status: "Active" },
  { id: 6, name: "Olivia Taylor", email: "olivia@example.com", role: "Manager", status: "Active" },
  { id: 7, name: "Daniel Martinez", email: "daniel@example.com", role: "User", status: "Inactive" },
  { id: 8, name: "Sophia Anderson", email: "sophia@example.com", role: "User", status: "Active" },
  { id: 9, name: "James Thomas", email: "james@example.com", role: "Admin", status: "Active" },
  { id: 10, name: "Isabella White", email: "isabella@example.com", role: "User", status: "Inactive" },
];

const ITEMS_PER_PAGE = 5;

// -----------------
// Users Page
// -----------------
export default function Users() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const username = searchParams.get("username") || "";
  const role = searchParams.get("role") || "";
  const status = searchParams.get("status") || "";
  const page = Number(searchParams.get("page")) || 1;

  // -----------------
  // State
  // -----------------
  const [users, setUsers] = useState<User[]>(dummyUsersInitial);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<Omit<User, "id">>({
    name: "",
    email: "",
    role: "User",
    status: "Active",
  });
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  // -----------------
  // Filters
  // -----------------
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      return (
        user.name.toLowerCase().includes(username.toLowerCase()) &&
        (role ? user.role === role : true) &&
        (status ? user.status === status : true)
      );
    });
  }, [username, role, status, users]);

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    params.set("page", "1");
    router.push(`/users?${params.toString()}`);
  };

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`/users?${params.toString()}`);
  };

  // -----------------
  // Modal Handlers
  // -----------------
  const openAddModal = () => {
    setFormData({ name: "", email: "", role: "User", status: "Active" });
    setIsAddOpen(true);
  };

  const openEditModal = (user: User) => {
    setCurrentUser(user);
    setFormData({ name: user.name, email: user.email, role: user.role, status: user.status });
    setIsEditOpen(true);
  };

  const saveAddUser = () => {
    const newUser: User = { ...formData, id: users.length + 1 };
    setUsers([newUser, ...users]);
    setIsAddOpen(false);
  };

  const saveEditUser = () => {
    if (!currentUser) return;
    setUsers(users.map(u => u.id === currentUser.id ? { ...formData, id: currentUser.id } : u));
    setIsEditOpen(false);
  };

  const deleteUser = (id: number) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  // -----------------
  // Render
  // -----------------
  return (
    <SidebarLayout>
      <div className="space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl font-bold text-[#0D0D0D] tracking-tight">
            Users Management
          </h1>
          <button
            onClick={openAddModal}
            className="bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-[#0D0D0D] px-6 py-2 rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            + Add User
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <div className="relative">
            <FaSearch className="absolute top-3 left-4 text-gray-400" />
            <input
              type="text"
              defaultValue={username}
              placeholder="Search by name..."
              onChange={(e) => updateQuery("username", e.target.value)}
              className="pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] shadow-sm transition"
            />
          </div>

          <select
            defaultValue={role}
            onChange={(e) => updateQuery("role", e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] shadow-sm transition cursor-pointer"
          >
            <option value="">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="User">User</option>
          </select>

          <select
            defaultValue={status}
            onChange={(e) => updateQuery("status", e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] shadow-sm transition cursor-pointer"
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#0D0D0D] text-[#D4AF37] uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-8 py-4 text-left">User</th>
                  <th className="px-8 py-4 text-left">Role</th>
                  <th className="px-8 py-4 text-left">Status</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedUsers.map(user => (
                  <tr key={user.id} className="group hover:bg-gray-50 transition-all duration-300">
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-semibold text-[#0D0D0D] group-hover:text-[#D4AF37] transition">
                          {user.name}
                        </span>
                        <span className="text-gray-500 text-xs">{user.email}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-4 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`px-4 py-1 text-xs font-medium rounded-full ${
                        user.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right space-x-2">
                      <button
                        onClick={() => openEditModal(user)}
                        className="px-4 py-1.5 text-xs font-medium rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300 cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="px-4 py-1.5 text-xs font-medium rounded-lg bg-red-100 text-red-600 hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer" 
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              onClick={() => changePage(p)}
              className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                p === page ? "bg-[#D4AF37] text-[#0D0D0D] shadow-md" : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Add Modal */}
        {isAddOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
              <button
                onClick={() => setIsAddOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 font-bold text-lg cursor-pointer"
              >
                ×
              </button>
              <h2 className="text-xl font-bold mb-4">Add User</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <select
                  value={formData.role}
                  onChange={e => setFormData({ ...formData, role: e.target.value as UserRole })}
                  className="w-full px-4 py-2 border rounded-lg cursor-pointer"
                >
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="User">User</option>
                </select>
                <select
                  value={formData.status}
                  onChange={e => setFormData({ ...formData, status: e.target.value as UserStatus })}
                  className="w-full px-4 py-2 border rounded-lg cursor-pointer"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <button
                  type="button"
                  onClick={saveAddUser}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-[#0D0D0D] py-2 rounded-xl font-semibold hover:scale-105 transition cursor-pointer"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {isEditOpen && currentUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
              <button
                onClick={() => setIsEditOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 font-bold text-lg cursor-pointer"
              >
                ×
              </button>
              <h2 className="text-xl font-bold mb-4">Edit User</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <select
                  value={formData.role}
                  onChange={e => setFormData({ ...formData, role: e.target.value as UserRole })}
                  className="w-full px-4 py-2 border rounded-lg cursor-pointer"
                >
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="User">User</option>
                </select>
                <select
                  value={formData.status}
                  onChange={e => setFormData({ ...formData, status: e.target.value as UserStatus })}
                  className="w-full px-4 py-2 border rounded-lg cursor-pointer"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <button
                  type="button"
                  onClick={saveEditUser}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-[#0D0D0D] py-2 rounded-xl font-semibold hover:scale-105 transition cursor-pointer"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </SidebarLayout>
  );
}






