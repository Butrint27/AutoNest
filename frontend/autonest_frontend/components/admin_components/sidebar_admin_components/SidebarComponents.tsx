'use client';

import React, { useState, useRef, useEffect } from "react";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaHome, FaTools, FaPhone, FaBars, FaUsers, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const [isOpen, setIsOpen] = useState(true); // desktop sidebar
  const [mobileOpen, setMobileOpen] = useState(false); // mobile overlay
  const [carsOpen, setCarsOpen] = useState(false); // dropdown toggle

  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const toggleCars = () => setCarsOpen(!carsOpen);

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
    {
      name: "Cars",
      icon: <IoCarSportSharp />,
      subItems: [
        { name: "New Cars", href: "/cars/new" },
        { name: "Used Cars", href: "/cars/used" },
      ],
    },
    { name: "Services", icon: <BsChatLeftTextFill />, href: "/admin_services" },
    { name: "Contact", icon: <FaPhone />, href: "/admin_contact" },
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
            <h1 className="text-2xl font-bold text-[#D4AF37]">AutoNest</h1>
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
            <div key={item.name}>
              {item.subItems ? (
                <>
                  <button
                    onClick={toggleCars}
                    className="w-full flex items-center gap-5 px-5 py-3 text-lg font-medium rounded-lg hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300"
                  >
                    <span>{item.icon}</span>
                    {isOpen && <span className="flex-1 text-left">{item.name}</span>}
                    {isOpen && (
                      <span>{carsOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
                    )}
                  </button>
                  {carsOpen && isOpen && (
                    <div className="ml-12 mt-1 flex flex-col space-y-1">
                      {item.subItems.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="px-3 py-2 text-sm rounded hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-colors duration-300"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="group flex items-center gap-5 px-5 py-3 text-lg font-medium rounded-lg transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0D0D0D]"
                >
                  <span>{item.icon}</span>
                  {isOpen && <span>{item.name}</span>}
                </a>
              )}
            </div>
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
          <h1 className="text-2xl font-bold text-[#D4AF37]">AutoNest</h1>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-3">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.subItems ? (
                <>
                  <button
                    onClick={toggleCars}
                    className="w-full flex items-center gap-5 px-5 py-3 text-lg font-medium rounded-lg hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300"
                  >
                    <span>{item.icon}</span>
                    <span className="flex-1 text-left">{item.name}</span>
                    <span>{carsOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
                  </button>
                  {carsOpen && (
                    <div className="ml-6 mt-1 flex flex-col space-y-1">
                      {item.subItems.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="px-3 py-2 text-sm rounded hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-colors duration-300"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-5 px-5 py-3 text-lg font-medium rounded-lg hover:bg-[#D4AF37] hover:text-[#0D0D0D]"
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              )}
            </div>
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






