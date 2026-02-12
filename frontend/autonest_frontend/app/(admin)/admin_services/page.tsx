'use client';

import { useState, useMemo } from "react";
import SidebarLayout from "@/components/admin_components/sidebar_admin_components/SidebarComponents";
import { FaSearch } from "react-icons/fa";

/* ================= TYPES ================= */

type Status = "Unread" | "Approved" | "Rejected";

interface CarDetails {
  title: string;
  description: string;
  price: number;
  horsepower: number;
  topSpeed: number;
  fuel: number;
  engine: string;
  drivetrain: string;
  torque: string;
  zeroToHundred: string;
  transmission: string;
  suspension: string;
  brakes: string;
  seats: string;
  climate: string;
  cabinMaterials: string;
  infotainment: string;
  soundSystem: string;
  fuelType: string;
  consumption: string;
  evRange: string;
  charging: string;
  airbags: string;
  laneAssist: string;
  cruiseControl: string;
  collisionAvoidance: string;
  parkingSensors: string;
  images: string[];
}

interface CarSubmission {
  id: number;
  customerName: string;
  customerEmail: string;
  status: Status;
  car: CarDetails;
}

/* ================= MOCK DATA ================= */

const mockSubmissions: CarSubmission[] = [
  {
    id: 1,
    customerName: "Alice Johnson",
    customerEmail: "alice@example.com",
    status: "Unread",
    car: {
      title: "BMW M3 2020",
      description: "Well maintained, low mileage",
      price: 65000,
      horsepower: 473,
      topSpeed: 290,
      fuel: 60,
      engine: "3.0L Twin-Turbo Inline-6",
      drivetrain: "RWD",
      torque: "550 Nm",
      zeroToHundred: "4.1 s",
      transmission: "7-Speed DCT",
      suspension: "Adaptive M Suspension",
      brakes: "Carbon Ceramic",
      seats: "Leather sport seats",
      climate: "Dual-zone",
      cabinMaterials: "Leather, Carbon Fiber",
      infotainment: "iDrive 7, Apple CarPlay, Android Auto",
      soundSystem: "Harman Kardon",
      fuelType: "Petrol",
      consumption: "10.2 L/100km",
      evRange: "N/A",
      charging: "N/A",
      airbags: "6",
      laneAssist: "Yes",
      cruiseControl: "Adaptive",
      collisionAvoidance: "Yes",
      parkingSensors: "360°",
      images: [
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
      ],
    },
  },
  {
    id: 2,
    customerName: "Bob Smith",
    customerEmail: "bob@example.com",
    status: "Unread",
    car: {
      title: "Tesla Model 3",
      description: "Full self-driving package",
      price: 50000,
      horsepower: 480,
      topSpeed: 261,
      fuel: 75,
      engine: "Electric Motor",
      drivetrain: "AWD",
      torque: "580 Nm",
      zeroToHundred: "3.3 s",
      transmission: "1-Speed Automatic",
      suspension: "Air Suspension",
      brakes: "Regenerative + Disk",
      seats: "Leather",
      climate: "Tri-zone",
      cabinMaterials: "Synthetic Leather",
      infotainment: "15-inch touchscreen",
      soundSystem: "Premium Audio",
      fuelType: "Electric",
      consumption: "N/A",
      evRange: "580 km",
      charging: "Fast Charge 0-80% in 30 min",
      airbags: "6",
      laneAssist: "Yes",
      cruiseControl: "Adaptive",
      collisionAvoidance: "Yes",
      parkingSensors: "360°",
      images: [
        "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg",
        "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg"
      ],
    },
  },
];

/* ================= PAGE ================= */

export default function AdminCarSubmissions() {
  const [submissions, setSubmissions] = useState<CarSubmission[]>(mockSubmissions);
  const [selectedId, setSelectedId] = useState<number>(mockSubmissions[0].id);
  const [searchQuery, setSearchQuery] = useState<string>("");

  /* ================= HANDLERS ================= */

  const handleSelect = (id: number) => {
  setSelectedId(id);
  setSubmissions((prev) =>
    prev.map((sub) =>
      sub.id === id && sub.status === "Unread"
        ? { ...sub, status: "Read" as Status } // explicitly cast to Status
        : sub
    )
  );
};

  const handleApprove = () => {
    setSubmissions((prev) =>
      prev.map((sub) =>
        sub.id === selectedId ? { ...sub, status: "Approved" } : sub
      )
    );
  };

  const handleReject = () => {
    setSubmissions((prev) =>
      prev.map((sub) =>
        sub.id === selectedId ? { ...sub, status: "Rejected" } : sub
      )
    );
  };

  /* ================= FILTERED SUBMISSIONS ================= */
  const filteredSubmissions = useMemo(() => {
    return submissions.filter((sub) =>
      sub.customerName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, submissions]);

  const selectedSubmission =
    submissions.find((s) => s.id === selectedId) ?? submissions[0];

  /* ================= UI ================= */

  return (
    <SidebarLayout>
      <div className="p-8">
        <div className="h-[80vh] bg-white rounded-3xl shadow-xl overflow-hidden flex">

          {/* ================= LEFT PANEL ================= */}
          <div className="w-[360px] bg-gray-50 flex flex-col">

            {/* Header */}
            <div className="px-6 pt-6 pb-4">
              <h1 className="text-2xl font-bold text-[#0D0D0D]">Used Car Submissions</h1>
              <p className="text-xs text-gray-400 mt-1">Manage customer car submissions</p>
            </div>

            {/* Search */}
            <div className="px-6 pb-4">
              <div className="relative">
                <FaSearch className="absolute top-3 left-4 text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white shadow-sm focus:ring-2 focus:ring-[#D4AF37] outline-none text-sm transition"
                />
              </div>
            </div>

            {/* Submissions */}
            <div className="flex-1 overflow-y-auto px-3 space-y-2 pb-4">
              {filteredSubmissions.length > 0 ? (
                filteredSubmissions.map((sub) => {
                  const carTitle = sub.car.title;
                  const isActive = sub.id === selectedId;

                  return (
                    <div
                      key={sub.id}
                      onClick={() => handleSelect(sub.id)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                        isActive ? "bg-[#D4AF37]/15 shadow-sm" : "hover:bg-white hover:shadow-sm"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-[#0D0D0D] text-sm">{sub.customerName}</h3>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                          sub.status === "Unread" ? "bg-[#D4AF37] text-[#0D0D0D]" :
                          sub.status === "Approved" ? "bg-green-200 text-green-800" :
                          "bg-red-200 text-red-800"
                        }`}>
                          {sub.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 truncate mt-1">{carTitle}</p>
                    </div>
                  );
                })
              ) : (
                <p className="text-center text-gray-400 text-sm mt-4">No submissions found</p>
              )}
            </div>
          </div>

          {/* ================= RIGHT PANEL ================= */}
          <div className="flex-1 flex flex-col bg-white overflow-y-auto">

            {/* Customer Header */}
            <div className="px-8 py-5 bg-white shadow-sm flex justify-between items-center">
              <div>
                <h2 className="font-bold text-lg text-[#0D0D0D]">{selectedSubmission.customerName}</h2>
                <p className="text-xs text-gray-400">{selectedSubmission.customerEmail}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleApprove}
                  className="px-4 py-2 rounded-xl bg-green-200 text-green-800 font-semibold hover:bg-green-300 transition"
                >
                  Approve
                </button>
                <button
                  onClick={handleReject}
                  className="px-4 py-2 rounded-xl bg-red-200 text-red-800 font-semibold hover:bg-red-300 transition"
                >
                  Reject
                </button>
              </div>
            </div>

            {/* Car Details */}
            <div className="flex-1 px-8 py-6 space-y-6">
              <h3 className="font-bold text-lg text-[#D4AF37]">{selectedSubmission.car.title}</h3>
              <p className="text-sm text-gray-600">{selectedSubmission.car.description}</p>

              {/* Images */}
              <div className="flex flex-wrap gap-4">
                {selectedSubmission.car.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`Car ${idx}`} className="w-48 h-32 object-cover rounded-lg border border-gray-200" />
                ))}
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div><strong>Price:</strong> ${selectedSubmission.car.price}</div>
                <div><strong>Horsepower:</strong> {selectedSubmission.car.horsepower} HP</div>
                <div><strong>Top Speed:</strong> {selectedSubmission.car.topSpeed} km/h</div>
                <div><strong>Fuel Capacity:</strong> {selectedSubmission.car.fuel} L</div>
                <div><strong>Engine:</strong> {selectedSubmission.car.engine}</div>
                <div><strong>Drivetrain:</strong> {selectedSubmission.car.drivetrain}</div>
                <div><strong>Torque:</strong> {selectedSubmission.car.torque}</div>
                <div><strong>0-100 km/h:</strong> {selectedSubmission.car.zeroToHundred}</div>
                <div><strong>Transmission:</strong> {selectedSubmission.car.transmission}</div>
                <div><strong>Suspension:</strong> {selectedSubmission.car.suspension}</div>
                <div><strong>Brakes:</strong> {selectedSubmission.car.brakes}</div>
                <div><strong>Seats:</strong> {selectedSubmission.car.seats}</div>
                <div><strong>Climate:</strong> {selectedSubmission.car.climate}</div>
                <div><strong>Cabin Materials:</strong> {selectedSubmission.car.cabinMaterials}</div>
                <div><strong>Infotainment:</strong> {selectedSubmission.car.infotainment}</div>
                <div><strong>Sound System:</strong> {selectedSubmission.car.soundSystem}</div>
                <div><strong>Fuel Type:</strong> {selectedSubmission.car.fuelType}</div>
                <div><strong>Consumption:</strong> {selectedSubmission.car.consumption}</div>
                <div><strong>EV Range:</strong> {selectedSubmission.car.evRange}</div>
                <div><strong>Charging:</strong> {selectedSubmission.car.charging}</div>
                <div><strong>Airbags:</strong> {selectedSubmission.car.airbags}</div>
                <div><strong>Lane Assist:</strong> {selectedSubmission.car.laneAssist}</div>
                <div><strong>Cruise Control:</strong> {selectedSubmission.car.cruiseControl}</div>
                <div><strong>Collision Avoidance:</strong> {selectedSubmission.car.collisionAvoidance}</div>
                <div><strong>Parking Sensors:</strong> {selectedSubmission.car.parkingSensors}</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}

