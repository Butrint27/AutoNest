'use client';

import { useState, useMemo } from "react";
import SidebarLayout from "@/components/admin_components/sidebar_admin_components/SidebarComponents";
import { FaSearch, FaTimes } from "react-icons/fa";
import { PDFDownloadLink, Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";

/* ================= TYPES ================= */

type Status = "Pending" | "Paid" | "Completed";
type CarType = "New" | "Used";

interface CarDetails {
  title: string;
  description: string;
  price: number;
  engine: string;
  drivetrain: string;
  torque: string;
  zeroToHundred: string;
  topSpeed: string;
  transmission: string;
  suspension: string;
  brakes: string;
  fuelType: string;
  consumption: string;
  evRange: string;
  charging: string;
  seats: string;
  climate: string;
  cabinMaterials: string;
  infotainment: string;
  soundSystem: string;
  airbags: string;
  laneAssist: string;
  cruiseControl: string;
  collisionAvoidance: string;
  parkingSensors: string;
  images: string[];
}

interface CarDeal {
  id: number;
  type: CarType;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  status: Status;
  car: CarDetails;
  price: number;
}

/* ================= MOCK DATA ================= */

const mockCars: CarDeal[] = [
  {
    id: 1,
    type: "Used",
    customerName: "Alice Johnson",
    customerEmail: "alice@example.com",
    customerPhone: "+1 555-123-4567",
    status: "Pending",
    price: 65000,
    car: {
      title: "BMW M3 2020",
      description: "Well maintained, low mileage",
      price: 65000,
      engine: "V8 Twin Turbo",
      drivetrain: "RWD",
      torque: "550 Nm",
      zeroToHundred: "4.1 s",
      topSpeed: "290 km/h",
      transmission: "7-Speed DCT",
      suspension: "Adaptive M Suspension",
      brakes: "Carbon Ceramic with ABS",
      fuelType: "Petrol",
      consumption: "10.2 L/100km",
      evRange: "N/A",
      charging: "N/A",
      seats: "Leather sport seats",
      climate: "Dual-zone automatic",
      cabinMaterials: "Leather, Carbon Fiber",
      infotainment: "iDrive 7, Apple CarPlay, Android Auto",
      soundSystem: "Harman Kardon",
      airbags: "6 strategically placed",
      laneAssist: "Yes",
      cruiseControl: "Adaptive",
      collisionAvoidance: "Yes",
      parkingSensors: "360°",
      images: [
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
        "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg"
      ],
    },
  },
  {
    id: 2,
    type: "New",
    status: "Pending",
    price: 90000,
    car: {
      title: "Mercedes S-Class 2024",
      description: "Brand new luxury sedan",
      price: 90000,
      engine: "V8 Twin Turbo",
      drivetrain: "AWD",
      torque: "700 Nm",
      zeroToHundred: "4.8 s",
      topSpeed: "250 km/h",
      transmission: "9-Speed Automatic",
      suspension: "AIRMATIC",
      brakes: "Carbon Ceramic with ABS",
      fuelType: "Petrol",
      consumption: "11 L/100km",
      evRange: "N/A",
      charging: "N/A",
      seats: "Leather, heated & ventilated",
      climate: "Tri-zone automatic",
      cabinMaterials: "Leather, Wood",
      infotainment: "MBUX, Apple CarPlay, Android Auto",
      soundSystem: "Burmester 16-speaker",
      airbags: "8 strategically placed",
      laneAssist: "Yes",
      cruiseControl: "Adaptive",
      collisionAvoidance: "Yes",
      parkingSensors: "360°",
      images: [
        "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg",
        "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
      ],
    },
  },
];

/* ================= PDF STYLES ================= */

const pdfStyles = StyleSheet.create({
  page: { padding: 30, fontSize: 10, fontFamily: 'Helvetica' },
  header: { fontSize: 18, textAlign: 'center', fontWeight: 'bold', marginBottom: 15 },
  section: { marginBottom: 10 },
  subHeader: { fontSize: 14, fontWeight: 'bold', marginBottom: 5 },
  text: { marginBottom: 2 },
  images: { flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between' },
  carImage: { width: 150, height: 90 },
  signature: { marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' },
  signatureBlock: { width: '45%', textAlign: 'center' },
  footer: { marginTop: 20, textAlign: 'center', fontSize: 8, color: 'gray' },
});

/* ================= PDF COMPONENT ================= */

function CarContractPDF({ deal }: { deal: CarDeal }) {
  const date = new Date().toLocaleDateString();
  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <Text style={pdfStyles.header}>AutoSalon - Car Deal Contract</Text>

        {/* Customer Info */}
        {deal.customerName && (
          <View style={pdfStyles.section}>
            <Text style={pdfStyles.subHeader}>Customer Information</Text>
            <Text style={pdfStyles.text}>Name: {deal.customerName}</Text>
            <Text style={pdfStyles.text}>Email: {deal.customerEmail}</Text>
            <Text style={pdfStyles.text}>Phone: {deal.customerPhone}</Text>
          </View>
        )}

        {/* Car Images */}
        <View style={pdfStyles.images}>
          {deal.car.images.slice(0, 3).map((img, idx) => (
            <Image key={idx} style={pdfStyles.carImage} src={img} />
          ))}
        </View>

        {/* Car Specs */}
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeader}>Engine & Performance</Text>
          <Text style={pdfStyles.text}>Engine Type: {deal.car.engine}</Text>
          <Text style={pdfStyles.text}>Drivetrain: {deal.car.drivetrain}</Text>
          <Text style={pdfStyles.text}>Torque: {deal.car.torque}</Text>
          <Text style={pdfStyles.text}>0-100 km/h: {deal.car.zeroToHundred}</Text>
          <Text style={pdfStyles.text}>Top Speed: {deal.car.topSpeed}</Text>
          <Text style={pdfStyles.text}>Transmission: {deal.car.transmission}</Text>
          <Text style={pdfStyles.text}>Suspension: {deal.car.suspension}</Text>
          <Text style={pdfStyles.text}>Brakes: {deal.car.brakes}</Text>
        </View>

        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeader}>Fuel & Efficiency</Text>
          <Text style={pdfStyles.text}>Fuel Type: {deal.car.fuelType}</Text>
          <Text style={pdfStyles.text}>Consumption: {deal.car.consumption}</Text>
          <Text style={pdfStyles.text}>EV Range: {deal.car.evRange}</Text>
          <Text style={pdfStyles.text}>Charging: {deal.car.charging}</Text>
        </View>

        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeader}>Interior & Comfort</Text>
          <Text style={pdfStyles.text}>Seats: {deal.car.seats}</Text>
          <Text style={pdfStyles.text}>Climate Control: {deal.car.climate}</Text>
          <Text style={pdfStyles.text}>Cabin Materials: {deal.car.cabinMaterials}</Text>
          <Text style={pdfStyles.text}>Infotainment: {deal.car.infotainment}</Text>
          <Text style={pdfStyles.text}>Sound System: {deal.car.soundSystem}</Text>
        </View>

        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeader}>Safety & Driver Assistance</Text>
          <Text style={pdfStyles.text}>Airbags: {deal.car.airbags}</Text>
          <Text style={pdfStyles.text}>Lane Assist: {deal.car.laneAssist}</Text>
          <Text style={pdfStyles.text}>Adaptive Cruise Control: {deal.car.cruiseControl}</Text>
          <Text style={pdfStyles.text}>Collision Avoidance: {deal.car.collisionAvoidance}</Text>
          <Text style={pdfStyles.text}>Parking Sensors: {deal.car.parkingSensors}</Text>
        </View>

        {/* Deal Terms */}
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeader}>Deal Terms</Text>
          <Text style={pdfStyles.text}>Price: ${deal.price}</Text>
          <Text style={pdfStyles.text}>Payment Status: {deal.status}</Text>
          <Text style={pdfStyles.text}>Warranty: Standard manufacturer warranty applies</Text>
          <Text style={pdfStyles.text}>Delivery: As agreed between AutoSalon and customer</Text>
        </View>

        {/* Terms & Conditions */}
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeader}>Terms & Conditions</Text>
          <Text style={pdfStyles.text}>
            This contract represents a binding agreement between AutoSalon and the customer.
            All details provided are accurate to the best of AutoSalon knowledge.
            The customer acknowledges the vehicle condition and agrees to the terms above.
          </Text>
        </View>

        {/* Signatures */}
        <View style={pdfStyles.signature}>
          <View style={pdfStyles.signatureBlock}>
            <Text>Customer Signature</Text>
            <Text>________________________</Text>
          </View>
          <View style={pdfStyles.signatureBlock}>
            <Text>AutoSalon Representative</Text>
            <Text>________________________</Text>
          </View>
        </View>

        <Text style={pdfStyles.footer}>Generated by AutoSalon System on {new Date().toLocaleDateString()}</Text>
      </Page>
    </Document>
  );
}

/* ================= MAIN PAGE ================= */

export default function AutoSalonDashboard() {
  const [cars, setCars] = useState<CarDeal[]>(mockCars);
  const [selectedCar, setSelectedCar] = useState<CarDeal | null>(null);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<CarType>("New");

  const filteredCars = useMemo(() =>
    cars
      .filter(c => c.type === activeTab)
      .filter(c =>
        (c.customerName?.toLowerCase() ?? "").includes(search.toLowerCase()) ||
        c.car.title.toLowerCase().includes(search.toLowerCase())
      ),
    [cars, activeTab, search]
  );

  return (
    <SidebarLayout>
      <div className="p-8">

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {["New", "Used"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as CarType)}
              className={`px-4 py-2 rounded-xl font-semibold transition ${
                activeTab === tab ? "bg-[#D4AF37] text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab} Cars
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-1/3 mb-6">
          <FaSearch className="absolute left-3 top-3 text-gray-400"/>
          <input
            type="text"
            placeholder="Search cars or customer..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border focus:ring-2 focus:ring-[#D4AF37]"
          />
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map(car => (
            <div key={car.id} className="bg-white shadow-lg rounded-2xl p-4 cursor-pointer hover:shadow-xl transition" onClick={() => setSelectedCar(car)}>
              <h3 className="font-bold text-lg">{car.car.title}</h3>
              {car.customerName && <p className="text-sm text-gray-500">{car.customerName}</p>}
              <p className="text-sm text-gray-700">Price: ${car.price}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                car.status === "Pending" ? "bg-yellow-200 text-yellow-800" :
                car.status === "Paid" ? "bg-green-200 text-green-800" :
                "bg-gray-200 text-gray-800"
              }`}>{car.status}</span>
              <div className="flex gap-2 mt-2">
                <PDFDownloadLink
                  document={<CarContractPDF deal={car} />}
                  fileName={`CarDeal-${car.id}.pdf`}
                >
                  {({ loading }) => (
                    <button className="text-xs px-2 py-1 bg-[#D4AF37] text-white rounded-xl">
                      {loading ? "Generating..." : "Download Contract"}
                    </button>
                  )}
                </PDFDownloadLink>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCar && (
          <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-start pt-16">
            <div className="bg-white rounded-3xl w-[90%] max-w-5xl max-h-[90vh] overflow-y-auto p-6 relative">
              <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900" onClick={() => setSelectedCar(null)}>
                <FaTimes />
              </button>

              <h2 className="font-bold text-2xl mb-4">Car Deal Contract</h2>

              {selectedCar.customerName && (
                <div className="mb-4">
                  <h3 className="font-semibold text-lg">Customer Information</h3>
                  <p>Name: {selectedCar.customerName}</p>
                  <p>Email: {selectedCar.customerEmail}</p>
                  <p>Phone: {selectedCar.customerPhone}</p>
                </div>
              )}

              {/* Car Images */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {selectedCar.car.images.slice(0, 3).map((img, idx) => (
                  <img key={idx} src={img} alt={`Car ${idx}`} className="w-full h-40 object-cover rounded-lg border border-gray-200"/>
                ))}
              </div>

              {/* Car Specs */}
              <div className="mb-4">
                <h3 className="font-semibold text-lg">Engine & Performance</h3>
                <p>Engine Type: {selectedCar.car.engine}</p>
                <p>Drivetrain: {selectedCar.car.drivetrain}</p>
                <p>Torque: {selectedCar.car.torque}</p>
                <p>0-100 km/h: {selectedCar.car.zeroToHundred}</p>
                <p>Top Speed: {selectedCar.car.topSpeed}</p>
                <p>Transmission: {selectedCar.car.transmission}</p>
                <p>Suspension: {selectedCar.car.suspension}</p>
                <p>Brakes: {selectedCar.car.brakes}</p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-lg">Fuel & Efficiency</h3>
                <p>Fuel Type: {selectedCar.car.fuelType}</p>
                <p>Consumption: {selectedCar.car.consumption}</p>
                <p>EV Range: {selectedCar.car.evRange}</p>
                <p>Charging: {selectedCar.car.charging}</p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-lg">Interior & Comfort</h3>
                <p>Seats: {selectedCar.car.seats}</p>
                <p>Climate Control: {selectedCar.car.climate}</p>
                <p>Cabin Materials: {selectedCar.car.cabinMaterials}</p>
                <p>Infotainment: {selectedCar.car.infotainment}</p>
                <p>Sound System: {selectedCar.car.soundSystem}</p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-lg">Safety & Driver Assistance</h3>
                <p>Airbags: {selectedCar.car.airbags}</p>
                <p>Lane Assist: {selectedCar.car.laneAssist}</p>
                <p>Adaptive Cruise Control: {selectedCar.car.cruiseControl}</p>
                <p>Collision Avoidance: {selectedCar.car.collisionAvoidance}</p>
                <p>Parking Sensors: {selectedCar.car.parkingSensors}</p>
              </div>

              {/* Deal Terms & T&C */}
              <div className="mb-4">
                <h3 className="font-semibold text-lg">Deal Terms</h3>
                <p>Price: ${selectedCar.price}</p>
                <p>Payment Status: {selectedCar.status}</p>
                <p>Warranty: Standard manufacturer warranty applies</p>
                <p>Delivery: As agreed between AutoSalon and customer</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg">Terms & Conditions</h3>
                <p>
                  This contract represents a binding agreement between AutoSalon and the customer.
                  All details provided are accurate to the best of AutoSalon knowledge.
                  The customer acknowledges the vehicle condition and agrees to the terms above.
                </p>
              </div>

              {/* Signatures */}
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <p>Customer Signature</p>
                  <div className="border-t mt-8"></div>
                </div>
                <div className="text-center">
                  <p>AutoSalon Representative</p>
                  <div className="border-t mt-8"></div>
                </div>
              </div>

              {/* PDF Download */}
              <div className="mt-6 flex justify-end">
                <PDFDownloadLink
                  document={<CarContractPDF deal={selectedCar} />}
                  fileName={`CarDeal-${selectedCar.id}.pdf`}
                >
                  {({ loading }) => (
                    <button className="px-4 py-2 rounded-xl bg-[#D4AF37] text-white font-semibold hover:bg-yellow-600 transition">
                      {loading ? "Generating..." : "Download Contract"}
                    </button>
                  )}
                </PDFDownloadLink>
              </div>

            </div>
          </div>
        )}

      </div>
    </SidebarLayout>
  );
}




