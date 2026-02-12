"use client";

import { useState } from "react";
import SidebarLayout from "@/components/admin_components/sidebar_admin_components/SidebarComponents";
import { MdHistory } from "react-icons/md";

interface Subscriber {
  id: number;
  name: string;
  email: string;
}

interface NotificationItem {
  id: number;
  title: string;
  message: string;
  date: string;
}

// Dummy subscribed users (15 total)
const mockSubscribedUsers: Subscriber[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Davis", email: "charlie@example.com" },
  { id: 4, name: "Diana Prince", email: "diana@example.com" },
  { id: 5, name: "Ethan Hunt", email: "ethan@example.com" },
  { id: 6, name: "Fiona Gallagher", email: "fiona@example.com" },
  { id: 7, name: "George Clooney", email: "george@example.com" },
  { id: 8, name: "Hannah Montana", email: "hannah@example.com" },
  { id: 9, name: "Ian Somerhalder", email: "ian@example.com" },
  { id: 10, name: "Julia Roberts", email: "julia@example.com" },
  { id: 11, name: "Kevin Hart", email: "kevin@example.com" },
  { id: 12, name: "Laura Palmer", email: "laura@example.com" },
  { id: 13, name: "Michael Jordan", email: "michael@example.com" },
  { id: 14, name: "Natalie Portman", email: "natalie@example.com" },
  { id: 15, name: "Oscar Isaac", email: "oscar@example.com" },
];

export default function Notification() {
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [historyOpen, setHistoryOpen] = useState<boolean>(false);
  const [notificationHistory, setNotificationHistory] = useState<NotificationItem[]>([]);

  const handleSend = () => {
    if (!title.trim() || !message.trim()) {
      alert("Please enter both title and description!");
      return;
    }

    const newNotification: NotificationItem = {
      id: Date.now(),
      title,
      message,
      date: new Date().toLocaleString(),
    };

    setNotificationHistory([newNotification, ...notificationHistory]);
    setShowAlert(true);

    // Clear fields
    setTitle("");
    setMessage("");

    // Hide alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleDelete = (id: number) => {
    setNotificationHistory(notificationHistory.filter((item) => item.id !== id));
  };

  const handleEdit = (item: NotificationItem) => {
    setTitle(item.title);
    setMessage(item.message);
    setHistoryOpen(false);
    handleDelete(item.id);
  };

  return (
    <SidebarLayout>
      <div className="space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#0D0D0D]">Send Notification</h1>
          <button
            onClick={() => setHistoryOpen(true)}
            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200 cursor-pointer"
          >
            <MdHistory size={24} />
            History
          </button>
        </div>

        {/* Alert */}
        {showAlert && (
          <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg shadow transition-all duration-300">
            Notification sent successfully!
          </div>
        )}

        {/* Notification Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Notification Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Notification Description
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={5}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300 resize-none"
            />
          </div>

          <button
            onClick={handleSend}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Send to All Subscribers
          </button>
        </div>

        {/* Subscribers List */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Subscribed Users ({mockSubscribedUsers.length})
          </h2>
          <ul className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
            {mockSubscribedUsers.map((user) => (
              <li
                key={user.id}
                className="flex justify-between items-center px-4 py-3 hover:bg-yellow-50 rounded-lg transition-colors duration-200"
              >
                <span className="font-medium text-gray-700">{user.name}</span>
                <span className="text-gray-500 text-sm">{user.email}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* History Modal */}
        {historyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-xl w-11/12 md:w-2/3 max-h-[80vh] overflow-y-auto p-6 md:p-8 shadow-lg relative">
              <h2 className="text-2xl font-bold mb-4">Notification History</h2>
              <button
                onClick={() => setHistoryOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-xl"
              >
                &times;
              </button>
              {notificationHistory.length === 0 ? (
                <p className="text-gray-500">No notifications sent yet.</p>
              ) : (
                <ul className="space-y-4">
                  {notificationHistory.map((item) => (
                    <li key={item.id} className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-800">{item.title}</h3>
                          <p className="text-gray-600">{item.message}</p>
                          <span className="text-gray-400 text-sm">{item.date}</span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(item)}
                            className="px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition-colors cursor-pointer"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="px-3 py-1 bg-red-400 text-black rounded hover:bg-red-500 transition-colors cursor-pointer"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

      </div>
    </SidebarLayout>
  );
}




