'use client';

import React, { useState, useRef, useEffect } from "react";
import { FaHome, FaTools, FaPhone, FaBars, FaUsers } from "react-icons/fa";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const [isOpen, setIsOpen] = useState(true); // desktop sidebar
  const [mobileOpen, setMobileOpen] = useState(false); // mobile overlay

  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  // Click outside listener for mobile sidebar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  const menuItems = [
    { name: "Home", icon: <FaHome />, href: "/dashboard" },
    { name: "Users", icon: <FaUsers />, href: "/users" },
    { name: "Services", icon: <FaTools />, href: "/services" },
    { name: "Contact", icon: <FaPhone />, href: "/contact" },
  ];

 return (
  <div className="min-h-screen bg-gray-100 font-sans">
    {/* Desktop Sidebar */}
    <div
      className={`hidden md:flex fixed top-0 left-0 h-screen flex-col bg-gradient-to-b from-[#0D0D0D] via-[#111111] to-[#0D0D0D] text-white transition-all duration-300 shadow-lg z-40 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        {isOpen && (
          <h1 className="text-2xl font-bold text-[#D4AF37]">
            AutoNest
          </h1>
        )}
        <button
          onClick={toggleSidebar}
          className="text-[#D4AF37] hover:text-white transition-colors duration-300"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-2 space-y-3">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group flex items-center gap-5 px-5 py-3 text-lg font-medium rounded-lg transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0D0D0D]"
          >
            <span>{item.icon}</span>
            {isOpen && <span>{item.name}</span>}
          </a>
        ))}
      </nav>
    </div>

    {/* Mobile Overlay */}
    {mobileOpen && (
      <div className="fixed inset-0 z-40 md:hidden bg-black/30 backdrop-blur-sm"></div>
    )}

    {/* Mobile Sidebar */}
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 left-0 z-50 md:hidden bg-[#0D0D0D] text-white w-64 flex flex-col shadow-xl transform transition-transform duration-300 ${
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-center p-6 border-b border-[#D4AF37]">
        <h1 className="text-2xl font-bold text-[#D4AF37]">
          AutoNest
        </h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-3">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-5 px-5 py-3 text-lg font-medium rounded-lg hover:bg-[#D4AF37] hover:text-[#0D0D0D]"
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </div>

    {/* Main Content */}
    <div
      className={`transition-all duration-300 ${
        isOpen ? "md:ml-64" : "md:ml-20"
      }`}
    >
      <div className="min-h-screen p-6 md:p-10 overflow-y-auto">
        {/* Mobile Hamburger */}
        <div className="md:hidden mb-4">
          <button
            onClick={toggleMobile}
            className="text-[#0D0D0D] bg-[#D4AF37] p-2 rounded hover:bg-yellow-500 transition-colors duration-300"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Page Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          {children}
        </div>
      </div>
    </div>
  </div>
);

}





