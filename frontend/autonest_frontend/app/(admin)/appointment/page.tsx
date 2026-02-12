'use client';

import React, { useState } from "react";
import dynamic from "next/dynamic";
import SidebarLayout from "@/components/admin_components/sidebar_admin_components/SidebarComponents";

// Dynamic import for SSR
const FullCalendar = dynamic(() => import("@fullcalendar/react"), { ssr: false });

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import type { EventClickArg, EventInput } from "@fullcalendar/core";

interface Appointment {
  name: string;
  email: string;
  phone: string;
  time: string;
  date: string; // YYYY-MM-DD
}

export default function Appointment() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedAppointments, setSelectedAppointments] = useState<Appointment[]>([]);

  const appointments: Appointment[] = [
    { name: "John Doe", email: "john@example.com", phone: "123-456-7890", time: "10:00 AM", date: "2026-02-12" },
    { name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", time: "2:00 PM", date: "2026-02-12" },
    { name: "Alice Johnson", email: "alice@example.com", phone: "555-555-5555", time: "11:30 AM", date: "2026-02-15" },
    { name: "Bob Brown", email: "bob@example.com", phone: "111-222-3333", time: "09:00 AM", date: "2026-02-12" },
    { name: "Charlie Green", email: "charlie@example.com", phone: "444-555-6666", time: "3:00 PM", date: "2026-02-15" },
    { name: "Diana White", email: "diana@example.com", phone: "777-888-9999", time: "1:30 PM", date: "2026-02-16" },
    { name: "Eve Black", email: "eve@example.com", phone: "000-111-2222", time: "4:00 PM", date: "2026-02-12" },
  ];

  // Convert appointments to FullCalendar events
  const events: EventInput[] = appointments.map((appt) => ({
    title: `${appt.name} — ${appt.time}`,
    start: appt.date,
    extendedProps: { ...appt },
  }));

  const handleDateClick = (arg: DateClickArg) => {
    setSelectedDate(arg.dateStr);
    const filtered = appointments.filter((appt) => appt.date === arg.dateStr);
    setSelectedAppointments(filtered);
  };

  const handleEventClick = (arg: EventClickArg) => {
    const appt = appointments.find(
      (a) => a.name === arg.event.extendedProps.name && a.date === arg.event.startStr
    );
    if (appt) {
      setSelectedDate(appt.date);
      setSelectedAppointments([appt]);
    }
  };

  return (
    <SidebarLayout>
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Calendar */}
        <div className="flex-1 bg-white shadow-lg rounded-xl p-4">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            events={events}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            dayMaxEventRows={true}
            height="auto"
            eventColor="#D4AF37"       // Gold background
            eventTextColor="#0D0D0D"   // Black text
            dayCellClassNames={() => [
              "transition-all duration-200 hover:bg-[#FFF5CC] rounded-lg cursor-pointer"
            ]}
          />
        </div>

        {/* Appointments List */}
        <div className="w-full lg:w-96 bg-[#FFFFFF] shadow-lg rounded-xl p-6 max-h-[600px] overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#0D0D0D]">
            {selectedDate ? `Appointments for ${new Date(selectedDate).toDateString()}` : "Select a date"}
          </h2>

          {selectedAppointments.length === 0 && selectedDate && (
            <p className="text-[#0D0D0D]">No appointments on this date.</p>
          )}

          {selectedAppointments.map((appt, idx) => (
            <div
              key={idx}
              className="p-4 mb-3 border-l-4 border-[#D4AF37] rounded-lg bg-[#F7F7F7] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-colors shadow-md"
            >
              <p className="font-semibold text-lg">{appt.name}</p>
              <p className="text-sm">Email: {appt.email}</p>
              <p className="text-sm">Phone: {appt.phone}</p>
              <p className="text-sm font-medium mt-1">Time: {appt.time}</p>
            </div>
          ))}
        </div>
      </div>
    </SidebarLayout>
  );
}

