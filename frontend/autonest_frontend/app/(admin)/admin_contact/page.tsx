"use client";

import { useState, useMemo } from "react";
import { FaSearch, FaPaperPlane } from "react-icons/fa";
import SidebarLayout from "@/components/admin_components/sidebar_admin_components/SidebarComponents";

/* ================= TYPES ================= */

type Message = {
  from: "admin" | "user";
  text: string;
  time: string;
};

type Status = "Unread" | "Read";

type Conversation = {
  id: number;
  name: string;
  email: string;
  status: Status;
  messages: Message[];
};

/* ================= MOCK DATA ================= */

const mockConversations: Conversation[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Unread",
    messages: [
      { from: "user", text: "Hello admin, I need help with my booking.", time: "09:12 AM" },
      { from: "admin", text: "Hi John 👋 Sure, what seems to be the issue?", time: "09:15 AM" },
    ],
  },
  {
    id: 2,
    name: "Emma Smith",
    email: "emma@example.com",
    status: "Read",
    messages: [
      { from: "user", text: "Is my reservation confirmed?", time: "Yesterday" },
      { from: "admin", text: "Yes Emma, your reservation is fully confirmed ✅", time: "Yesterday" },
    ],
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    status: "Unread",
    messages: [
      { from: "user", text: "Can I change my booking date?", time: "10:00 AM" },
      { from: "admin", text: "Hi Michael, yes you can update it from your dashboard.", time: "10:05 AM" },
    ],
  },
];

/* ================= PAGE ================= */

export default function AdminContactPage() {
  const [conversations, setConversations] = useState<Conversation[]>(mockConversations);
  const [selectedId, setSelectedId] = useState<number>(mockConversations[0].id);
  const [replyText, setReplyText] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  /* ================= HANDLERS ================= */

  const handleSelect = (id: number) => {
    setSelectedId(id);

    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === id ? { ...conv, status: "Read" } : conv
      )
    );
  };

  const handleSend = () => {
    if (!replyText.trim()) return;

    const newMessage: Message = {
      from: "admin",
      text: replyText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === selectedId
          ? { ...conv, messages: [...conv.messages, newMessage] }
          : conv
      )
    );

    setReplyText("");
  };

  /* ================= FILTERED CONVERSATIONS ================= */
  const filteredConversations = useMemo(() => {
    return conversations.filter((conv) =>
      conv.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, conversations]);

  const selectedConversation =
    conversations.find((c) => c.id === selectedId) ?? conversations[0];

  /* ================= UI ================= */

  return (
    <SidebarLayout>
      <div className="p-8">
        <div className="h-[80vh] bg-white rounded-3xl shadow-xl overflow-hidden flex">

          {/* ================= LEFT PANEL ================= */}
          <div className="w-[360px] bg-gray-50 flex flex-col">

            {/* Header */}
            <div className="px-6 pt-6 pb-4">
              <h1 className="text-2xl font-bold text-[#0D0D0D]">Contact Inbox</h1>
              <p className="text-xs text-gray-400 mt-1">Manage user conversations</p>
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

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto px-3 space-y-2 pb-4">
              {filteredConversations.length > 0 ? (
                filteredConversations.map((chat) => {
                  const lastMessage = chat.messages[chat.messages.length - 1];
                  const isActive = chat.id === selectedId;

                  return (
                    <div
                      key={chat.id}
                      onClick={() => handleSelect(chat.id)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                        isActive ? "bg-[#D4AF37]/15 shadow-sm" : "hover:bg-white hover:shadow-sm"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-[#0D0D0D] text-sm">{chat.name}</h3>
                        {chat.status === "Unread" && (
                          <span className="text-[10px] bg-[#D4AF37] text-[#0D0D0D] px-2 py-0.5 rounded-full font-semibold">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 truncate mt-1">{lastMessage.text}</p>
                    </div>
                  );
                })
              ) : (
                <p className="text-center text-gray-400 text-sm mt-4">No users found</p>
              )}
            </div>
          </div>

          {/* ================= RIGHT PANEL ================= */}
          <div className="flex-1 flex flex-col bg-white">

            {/* Header */}
            <div className="px-8 py-5 bg-white shadow-sm">
              <h2 className="font-bold text-lg text-[#0D0D0D]">{selectedConversation.name}</h2>
              <p className="text-xs text-gray-400">{selectedConversation.email}</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
              {selectedConversation.messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.from === "admin" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-md px-5 py-3 rounded-3xl shadow-sm text-sm ${
                      msg.from === "admin"
                        ? "bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-[#0D0D0D]"
                        : "bg-white border border-gray-100"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="block text-[10px] text-right mt-1 opacity-70">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Reply */}
            <div className="p-6 bg-white shadow-inner flex gap-4">
              <input
                type="text"
                placeholder="Type your reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="flex-1 px-5 py-3 rounded-2xl bg-gray-100 focus:bg-white focus:ring-2 focus:ring-[#D4AF37] outline-none transition text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-[#D4AF37] hover:bg-yellow-500 transition text-[#0D0D0D] px-5 py-3 rounded-2xl flex items-center gap-2 font-semibold shadow-md cursor-pointer"
              >
                <FaPaperPlane size={12} />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}



