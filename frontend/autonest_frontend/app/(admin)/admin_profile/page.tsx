"use client";

import SidebarLayout from "@/components/admin_components/sidebar_admin_components/SidebarComponents";
import { useState, ChangeEvent } from "react";

export default function AdminProfile() {
  const [adminData, setAdminData] = useState({
    name: "John Doe",
    email: "admin@example.com",
    role: "Administrator",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
  });

  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error">("success");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setAdminData({ ...adminData, avatar: reader.result as string });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const showAlert = (message: string, type: "success" | "error") => {
    setAlertMessage(message);
    setAlertType(type);
    setTimeout(() => setAlertMessage(null), 3000); // hide after 3s
  };

  const handleSave = () => {
    // TODO: save API call
    showAlert("Profile updated successfully!", "success");
  };

  const handleDelete = () => {
    // TODO: delete API call
    showAlert("Account deleted!", "error");
  };

  return (
    <SidebarLayout>
      <div className="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-xl relative">
        {/* Alert */}
        {alertMessage && (
          <div
            className={`absolute top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white font-semibold ${
              alertType === "success" ? "bg-green-500" : "bg-red-600"
            }`}
          >
            {alertMessage}
          </div>
        )}

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 mb-8">
          {/* Avatar */}
          <div className="relative w-32 h-32 mb-4 md:mb-0 group">
            <img
              src={adminData.avatar}
              alt="Admin Avatar"
              className="w-32 h-32 rounded-full object-cover border-2 border-[#D4AF37] shadow-lg"
            />
            <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
              ✎
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </label>
          </div>

          {/* Basic Info */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#0D0D0D]">{adminData.name}</h2>
            <p className="text-gray-500 mt-1">{adminData.email}</p>
            <p className="text-gray-600 mt-1 font-medium">{adminData.role}</p>

            {/* Last Login */}
            <div className="flex mt-4">
              <div>
                <p className="text-lg font-semibold text-[#0D0D0D]">Last Login</p>
                <p className="text-gray-500 text-sm">Feb 10, 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Editable Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={adminData.name}
              onChange={handleChange}
              className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={adminData.email}
              onChange={handleChange}
              className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <input
              type="text"
              name="role"
              value={adminData.role}
              onChange={handleChange}
              className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4 mt-6">
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-yellow-500 transition cursor-pointer"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition cursor-pointer"
            >
              Delete Account
            </button>
          </div>
        </form>
      </div>
    </SidebarLayout>
  );
}




