'use client';

import React, { useState } from "react";
import SidebarLayout from "@/components/admin_components/sidebar_admin_components/SidebarComponents";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

type Car = {
  id: number;
  title: string;
  images: string[]; // Stored as URLs
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
};

// Form type for inputs (images are File[], numbers as strings for input)
type CarForm = Omit<Car, 'id' | 'images' | 'price' | 'horsepower' | 'topSpeed' | 'fuel'> & {
  images: File[];
  price: string;
  horsepower: string;
  topSpeed: string;
  fuel: string;
};

export default function CarsNew() {
  const [cars, setCars] = useState<Car[]>([
    {
      id: 1,
      title: "Tesla Model S",
      images: [],
      description: "Luxury electric sedan",
      price: 120000,
      horsepower: 670,
      topSpeed: 250,
      fuel: 0,
      engine: "Electric Motor",
      drivetrain: "AWD",
      torque: "1050 Nm",
      zeroToHundred: "2.5 s",
      transmission: "1-Speed Automatic",
      suspension: "Adaptive Air Suspension",
      brakes: "Carbon Ceramic",
      seats: "Leather, heated & ventilated",
      climate: "Tri-zone automatic",
      cabinMaterials: "Leather, Carbon Fiber, Aluminum",
      infotainment: "17-inch touchscreen, Apple CarPlay, Android Auto",
      soundSystem: "Premium 22-speaker audio",
      fuelType: "Electric",
      consumption: "N/A",
      evRange: "600 km",
      charging: "Fast Charge 0-80% in 30 min",
      airbags: "6 strategically placed",
      laneAssist: "Yes",
      cruiseControl: "Adaptive",
      collisionAvoidance: "Yes",
      parkingSensors: "360° Camera",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [form, setForm] = useState<CarForm>({
    title: "",
    description: "",
    price: "",
    horsepower: "",
    topSpeed: "",
    fuel: "",
    images: [],
    engine: "",
    drivetrain: "",
    torque: "",
    zeroToHundred: "",
    transmission: "",
    suspension: "",
    brakes: "",
    seats: "",
    climate: "",
    cabinMaterials: "",
    infotainment: "",
    soundSystem: "",
    fuelType: "",
    consumption: "",
    evRange: "",
    charging: "",
    airbags: "",
    laneAssist: "",
    cruiseControl: "",
    collisionAvoidance: "",
    parkingSensors: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle multiple image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm({ ...form, images: Array.from(e.target.files) });
    }
  };

  // Open Add Modal
  const openAddModal = () => {
    setForm({
      title: "",
      description: "",
      price: "",
      horsepower: "",
      topSpeed: "",
      fuel: "",
      images: [],
      engine: "",
      drivetrain: "",
      torque: "",
      zeroToHundred: "",
      transmission: "",
      suspension: "",
      brakes: "",
      seats: "",
      climate: "",
      cabinMaterials: "",
      infotainment: "",
      soundSystem: "",
      fuelType: "",
      consumption: "",
      evRange: "",
      charging: "",
      airbags: "",
      laneAssist: "",
      cruiseControl: "",
      collisionAvoidance: "",
      parkingSensors: "",
    });
    setEditingCar(null);
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const openEditModal = (car: Car) => {
    setForm({
      ...car,
      images: [], // Reset images for new upload
      price: car.price.toString(),
      horsepower: car.horsepower.toString(),
      topSpeed: car.topSpeed.toString(),
      fuel: car.fuel.toString(),
    });
    setEditingCar(car);
    setIsModalOpen(true);
  };

  // Save car
  const saveCar = () => {
    const carToSave: Car = {
      ...form,
      id: editingCar ? editingCar.id : cars.length + 1,
      price: Number(form.price),
      horsepower: Number(form.horsepower),
      topSpeed: Number(form.topSpeed),
      fuel: Number(form.fuel),
      images: form.images.map(file => URL.createObjectURL(file)), // convert uploaded files to URLs
    };

    if (editingCar) {
      setCars(cars.map(c => (c.id === editingCar.id ? carToSave : c)));
    } else {
      setCars([carToSave, ...cars]);
    }

    setIsModalOpen(false);
  };

  // Delete car
  const deleteCar = (id: number) => {
    if (confirm("Are you sure you want to delete this car?")) {
      setCars(cars.filter(c => c.id !== id));
    }
  };

  return (
    <SidebarLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#0D0D0D]">Cars Management</h1>
          <button
            onClick={openAddModal}
            className="bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-[#0D0D0D] px-6 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-2"
          >
            <FaPlus /> Add Car
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#0D0D0D] text-[#D4AF37] uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-6 py-4 text-left">Title</th>
                  <th className="px-6 py-4 text-left">Price</th>
                  <th className="px-6 py-4 text-left">Horsepower</th>
                  <th className="px-6 py-4 text-left">Top Speed</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {cars.map(car => (
                  <tr key={car.id} className="group hover:bg-gray-50 transition-all duration-300">
                    <td className="px-6 py-4">{car.title}</td>
                    <td className="px-6 py-4">${car.price}</td>
                    <td className="px-6 py-4">{car.horsepower} HP</td>
                    <td className="px-6 py-4">{car.topSpeed} km/h</td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => openEditModal(car)}
                        className="px-4 py-1.5 text-xs font-medium rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300 cursor-pointer"
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        onClick={() => deleteCar(car.id)}
                        className="px-4 py-1.5 text-xs font-medium rounded-lg bg-red-100 text-red-600 hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-[#1a1a1a] rounded-2xl p-6 w-full max-w-4xl overflow-y-auto max-h-[90vh]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-white">{editingCar ? "Edit Car" : "Add Car"}</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white hover:text-[#D4AF37] font-bold text-xl cursor-pointer"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                {/* Title & Description */}
                <input
                  type="text"
                  name="title"
                  placeholder="Car Title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#0D0D0D] border border-white/20 text-white"
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#0D0D0D] border border-white/20 text-white"
                />

                {/* Price, Horsepower, Top Speed */}
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                    className="px-4 py-2 rounded-lg bg-[#0D0D0D] border border-white/20 text-white"
                  />
                  <input
                    type="number"
                    name="horsepower"
                    placeholder="Horsepower"
                    value={form.horsepower}
                    onChange={handleChange}
                    className="px-4 py-2 rounded-lg bg-[#0D0D0D] border border-white/20 text-white"
                  />
                  <input
                    type="number"
                    name="topSpeed"
                    placeholder="Top Speed"
                    value={form.topSpeed}
                    onChange={handleChange}
                    className="px-4 py-2 rounded-lg bg-[#0D0D0D] border border-white/20 text-white"
                  />
                </div>

                {/* Fuel */}
                <input
                  type="text"
                  name="fuel"
                  placeholder="Fuel"
                  value={form.fuel}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-[#0D0D0D] border border-white/20 text-white"
                />

                {/* Images Upload */}
                <div>
                  <label className="text-white mb-2 block">Car Images</label>
                  <input
                    type="file"
                    multiple
                    onChange={handleImageChange}
                    className="text-white"
                  />
                  {form.images && form.images.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {form.images.map((file: File, idx: number) => (
                        <img
                          key={idx}
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="w-24 h-24 object-cover rounded-lg border border-white/20"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Advanced Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Engine & Performance */}
                  <div className="bg-[#0D0D0D] p-4 rounded-lg space-y-2">
                    <h3 className="text-[#D4AF37] font-semibold">Engine & Performance</h3>
                    <input type="text" name="engine" placeholder="Engine Type" value={form.engine} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="drivetrain" placeholder="Drivetrain" value={form.drivetrain} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="torque" placeholder="Torque" value={form.torque} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="zeroToHundred" placeholder="0-100 km/h" value={form.zeroToHundred} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="topSpeed" placeholder="Top Speed" value={form.topSpeed} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="transmission" placeholder="Transmission" value={form.transmission} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="suspension" placeholder="Suspension" value={form.suspension} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="brakes" placeholder="Brakes" value={form.brakes} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                  </div>

                  {/* Interior & Comfort */}
                  <div className="bg-[#0D0D0D] p-4 rounded-lg space-y-2">
                    <h3 className="text-[#D4AF37] font-semibold">Interior & Comfort</h3>
                    <input type="text" name="seats" placeholder="Seats" value={form.seats} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="climate" placeholder="Climate Control" value={form.climate} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="cabinMaterials" placeholder="Cabin Materials" value={form.cabinMaterials} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="infotainment" placeholder="Infotainment" value={form.infotainment} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="soundSystem" placeholder="Sound System" value={form.soundSystem} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                  </div>

                  {/* Fuel & Efficiency */}
                  <div className="bg-[#0D0D0D] p-4 rounded-lg space-y-2">
                    <h3 className="text-[#D4AF37] font-semibold">Fuel & Efficiency</h3>
                    <input type="text" name="fuelType" placeholder="Fuel Type" value={form.fuelType} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="consumption" placeholder="Consumption" value={form.consumption} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="evRange" placeholder="EV Range" value={form.evRange} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="charging" placeholder="Charging" value={form.charging} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                  </div>

                  {/* Safety & Driver Assistance */}
                  <div className="bg-[#0D0D0D] p-4 rounded-lg space-y-2">
                    <h3 className="text-[#D4AF37] font-semibold">Safety & Driver Assistance</h3>
                    <input type="text" name="airbags" placeholder="Airbags" value={form.airbags} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="laneAssist" placeholder="Lane Assist" value={form.laneAssist} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="cruiseControl" placeholder="Adaptive Cruise Control" value={form.cruiseControl} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="collisionAvoidance" placeholder="Collision Avoidance" value={form.collisionAvoidance} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                    <input type="text" name="parkingSensors" placeholder="Parking Sensors / 360° Camera" value={form.parkingSensors} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] text-white border border-white/20" />
                  </div>
                </div>

                <button
                  onClick={saveCar}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-[#0D0D0D] py-3 rounded-xl font-semibold hover:scale-105 transition cursor-pointer mt-4"
                >
                  {editingCar ? "Save Changes" : "Add Car"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </SidebarLayout>
  );
}



