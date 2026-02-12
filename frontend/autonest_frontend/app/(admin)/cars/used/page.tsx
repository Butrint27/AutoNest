'use client';

import { useState, useMemo } from "react";
import SidebarLayout from "@/components/admin_components/sidebar_admin_components/SidebarComponents";
import { FaSearch, FaFileInvoice, FaFilePdf, FaTimes } from "react-icons/fa";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

/* ================= TYPES ================= */

type Status = "Pending" | "Paid" | "Completed";

interface CarDocument {
  id: number;
  name: string;
  type: "Invoice" | "Report" | "Other";
  url: string;
}

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

interface UsedCarReport {
  id: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  status: Status;
  car: CarDetails;
  price: number;
  documents: CarDocument[];
}

/* ================= MOCK DATA ================= */

const mockUsedCars: UsedCarReport[] = [
  {
    id: 1,
    customerName: "Alice Johnson",
    customerEmail: "alice@example.com",
    customerPhone: "+1 555-123-4567",
    status: "Pending",
    price: 65000,
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
    documents: [
      { id: 1, name: "Invoice #001", type: "Invoice", url: "#" },
      { id: 2, name: "Inspection Report", type: "Report", url: "#" },
    ],
  },
  {
    id: 2,
    customerName: "Bob Smith",
    customerEmail: "bob@example.com",
    customerPhone: "+1 555-987-6543",
    status: "Paid",
    price: 50000,
    car: {
      title: "Audi RS5 2019",
      description: "Sporty and well maintained",
      price: 50000,
      horsepower: 450,
      topSpeed: 280,
      fuel: 55,
      engine: "2.9L V6 Twin-Turbo",
      drivetrain: "AWD",
      torque: "600 Nm",
      zeroToHundred: "3.9 s",
      transmission: "8-Speed Automatic",
      suspension: "Sport Adaptive",
      brakes: "Carbon Ceramic",
      seats: "Leather",
      climate: "Dual-zone",
      cabinMaterials: "Leather, Aluminum",
      infotainment: "MMI Touch",
      soundSystem: "Bang & Olufsen",
      fuelType: "Petrol",
      consumption: "11.0 L/100km",
      evRange: "N/A",
      charging: "N/A",
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
    documents: [
      { id: 1, name: "Invoice #002", type: "Invoice", url: "#" },
      { id: 2, name: "Inspection Report", type: "Report", url: "#" },
    ],
  },
];

/* ================= PDF COMPONENT ================= */

const pdfStyles = StyleSheet.create({
  page: { padding: 30, fontSize: 10, fontFamily: 'Helvetica' },
  header: { fontSize: 16, textAlign: 'center', fontWeight: 'bold', marginBottom: 10 },
  section: { marginBottom: 8 },
  tableRow: { flexDirection: 'row', marginBottom: 1 },
  cell: { flex: 1 },
  bold: { fontWeight: 'bold' },
  footer: { marginTop: 20, textAlign: 'center', fontSize: 8, color: 'gray' }
});

function UsedCarPDF({ report }: { report: UsedCarReport }) {
  const date = new Date().toLocaleDateString();
  const invoiceNumber = `INV-${report.id.toString().padStart(4, '0')}`;

  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <Text style={pdfStyles.header}>AutoNest - Used Car Document</Text>
        <Text style={{ textAlign: 'center', marginBottom: 10 }}>Invoice / Full Report</Text>

        <View style={pdfStyles.section}>
          <Text style={pdfStyles.bold}>Invoice #: {invoiceNumber}</Text>
          <Text>Date: {date}</Text>
          <Text>Customer Name: {report.customerName}</Text>
          <Text>Email: {report.customerEmail}</Text>
          <Text>Phone: {report.customerPhone}</Text>
          <Text>Status: {report.status}</Text>
          <Text>Price: ${report.price}</Text>
        </View>

        <View style={pdfStyles.section}>
          <Text style={pdfStyles.bold}>Car Details</Text>
          {Object.entries(report.car).map(([key, value]) => {
            if (key !== "images") return <Text key={key}>{`${key[0].toUpperCase() + key.slice(1)}: ${value}`}</Text>;
          })}
        </View>

        <View style={pdfStyles.section}>
          <Text style={pdfStyles.bold}>Documents</Text>
          {report.documents.map(doc => (
            <Text key={doc.id}>{`${doc.type}: ${doc.name}`}</Text>
          ))}
        </View>

        <Text style={pdfStyles.footer}>Generated by AutoNest System</Text>
      </Page>
    </Document>
  );
}

/* ================= MAIN PAGE ================= */

export default function UsedCarsPage() {
  const [usedCars, setUsedCars] = useState<UsedCarReport[]>(mockUsedCars);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCar, setSelectedCar] = useState<UsedCarReport | null>(null);

  const filteredCars = useMemo(() => {
    return usedCars.filter(car =>
      car.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.car.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, usedCars]);

  const handleStatusUpdate = (status: Status) => {
    if (!selectedCar) return;
    setUsedCars(prev => prev.map(car => car.id === selectedCar.id ? { ...car, status } : car));
    setSelectedCar(prev => prev ? { ...prev, status } : prev);
  };

  return (
    <SidebarLayout>
      <div className="p-8">
        <div className="h-[80vh] bg-white rounded-3xl shadow-xl overflow-hidden flex">

          {/* LEFT PANEL */}
          <div className="w-[360px] bg-gray-50 flex flex-col">
            <div className="px-6 pt-6 pb-4">
              <h1 className="text-2xl font-bold text-[#0D0D0D]">Used Car Reports</h1>
              <p className="text-xs text-gray-400 mt-1">Manage used cars and documents</p>
            </div>
            <div className="px-6 pb-4">
              <div className="relative">
                <FaSearch className="absolute top-3 left-4 text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search by name or car..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white shadow-sm focus:ring-2 focus:ring-[#D4AF37] outline-none text-sm transition"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-3 space-y-2 pb-4">
              {filteredCars.map(car => (
                <div
                  key={car.id}
                  onClick={() => setSelectedCar(car)}
                  className="p-4 rounded-2xl cursor-pointer hover:bg-[#D4AF37]/15 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-[#0D0D0D] text-sm">{car.customerName}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      car.status === "Pending" ? "bg-yellow-200 text-yellow-800" :
                      car.status === "Paid" ? "bg-green-200 text-green-800" :
                      "bg-gray-300 text-gray-800"
                    }`}>
                      {car.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 truncate mt-1">{car.car.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MODAL */}
          {selectedCar && (
            <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-start pt-16">
              <div className="bg-white rounded-3xl w-[90%] max-w-5xl max-h-[90vh] overflow-y-auto p-6 relative">
                <button
                  onClick={() => setSelectedCar(null)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                  <FaTimes />
                </button>

                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="font-bold text-xl">{selectedCar.customerName}</h2>
                    <p className="text-xs text-gray-400">{selectedCar.customerPhone} | {selectedCar.customerEmail}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleStatusUpdate("Paid")}
                      className="px-4 py-2 rounded-xl bg-green-200 text-green-800 font-semibold hover:bg-green-300 transition"
                    >
                      Mark as Paid
                    </button>
                    <button
                      onClick={() => handleStatusUpdate("Completed")}
                      className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
                    >
                      Complete
                    </button>
                    <PDFDownloadLink
                      document={<UsedCarPDF report={selectedCar} />}
                      fileName={`UsedCar-${selectedCar.id}.pdf`}
                      className="px-4 py-2 rounded-xl bg-[#D4AF37] text-white font-semibold hover:bg-yellow-600 transition flex items-center justify-center"
                    >
                      {({ loading }) => loading ? "Generating..." : "Download PDF"}
                    </PDFDownloadLink>
                  </div>
                </div>

                {/* Car Details */}
                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-[#D4AF37]">{selectedCar.car.title}</h3>
                  <p className="text-sm text-gray-600">{selectedCar.car.description}</p>

                  {/* Images */}
                  <div className="flex flex-wrap gap-4">
                    {selectedCar.car.images.map((img, idx) => (
                      <img key={idx} src={img} alt={`Car ${idx}`} className="w-48 h-32 object-cover rounded-lg border border-gray-200" />
                    ))}
                  </div>

                  {/* Documents */}
                  <div>
                    <h4 className="font-bold text-md text-gray-800 mt-4 mb-2">Documents</h4>
                    <div className="flex flex-col gap-2">
                      {selectedCar.documents.map(doc => (
                        <a
                          key={doc.id}
                          href={doc.url}
                          className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition text-sm"
                          target="_blank"
                        >
                          {doc.type === "Invoice" ? <FaFileInvoice /> : <FaFilePdf />}
                          {doc.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </SidebarLayout>
  );
}

