'use client';

import { useState, useEffect } from "react";
import SidebarLayout from "@/components/admin_components/sidebar_admin_components/SidebarComponents";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

export default function AdminNews() {
  const [newsList, setNewsList] = useState<NewsItem[]>([
    {
      id: 1,
      title: "New Electric Model Released",
      description: "AutoNest introduces the new 2026 electric vehicle.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      date: "2026-02-10",
    },
    {
      id: 2,
      title: "Summer Service Discount",
      description: "Get 20% off on all car services this summer.",
      image: "https://images.unsplash.com/photo-1483721310020-03333e577078",
      date: "2026-02-08",
    },
    {
      id: 3,
      title: "Luxury SUV Collection",
      description: "Discover our new premium SUV lineup.",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      date: "2026-02-05",
    },
    {
      id: 4,
      title: "Winter Tire Campaign",
      description: "Prepare your vehicle for winter conditions.",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
      date: "2026-02-02",
    },
    {
      id: 5,
      title: "AutoNest Expansion",
      description: "We are opening 3 new branches this year.",
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
      date: "2026-01-30",
    },
    {
      id: 6,
      title: "Hybrid Technology Update",
      description: "Next generation hybrid systems launched.",
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f",
      date: "2026-01-25",
    },
    {
      id: 7,
      title: "Customer Loyalty Program",
      description: "Earn rewards with every service visit.",
      image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023",
      date: "2026-01-20",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [snackbar, setSnackbar] = useState<string | null>(null);

  useEffect(() => {
    if (snackbar) {
      const timer = setTimeout(() => setSnackbar(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [snackbar]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImagePreview(null);
    setEditingId(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId !== null) {
      setNewsList((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? { ...item, title, description, image: imagePreview || item.image }
            : item
        )
      );
      setSnackbar("Article updated successfully");
    } else {
      const newItem: NewsItem = {
        id: Date.now(),
        title,
        description,
        image:
          imagePreview ||
          "https://images.unsplash.com/photo-1493238792000-8113da705763",
        date: new Date().toISOString().split("T")[0],
      };
      setNewsList((prev) => [newItem, ...prev]);
      setSnackbar("Article published successfully");
    }

    resetForm();
  };

  const handleEdit = (item: NewsItem) => {
    setTitle(item.title);
    setDescription(item.description);
    setImagePreview(item.image);
    setEditingId(item.id);
  };

  const handleDelete = (id: number) => {
    setNewsList((prev) => prev.filter((item) => item.id !== id));
    setSnackbar("Article deleted");
  };

  return (
    <SidebarLayout>
      <div className="max-w-7xl mx-auto space-y-12">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            News Management
          </h1>
          <p className="text-gray-500 mt-1">
            Create, edit and manage published news articles.
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-6">
            {editingId ? "Edit Article" : "Create New Article"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Article title"
              className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition"
            />

            <textarea
              required
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Article description"
              className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 transition"
            />

            {imagePreview && (
              <img
                src={imagePreview}
                className="h-44 w-full object-cover rounded-xl border border-gray-200 shadow-sm"
              />
            )}

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="bg-[#D4AF37] text-black px-6 py-3 rounded-xl font-semibold
                hover:opacity-90 active:scale-95 transition-all duration-200 shadow-sm cursor-pointer"
              >
                {editingId ? "Update Article" : "Publish Article"}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-gray-500 hover:text-black transition cursor-pointer"
                >
                  Cancel
                </button>
              )}
            </div>

          </form>
        </div>

        {/* TABLE */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b">
            <h2 className="text-xl font-semibold">All Articles</h2>
          </div>

          <div className="max-h-[400px] overflow-y-auto">

            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600 sticky top-0 z-10">
                <tr>
                  <th className="px-8 py-4 text-left font-medium">Article</th>
                  <th className="px-8 py-4 text-left font-medium">Date</th>
                  <th className="px-8 py-4 text-right font-medium">Actions</th>
                </tr>
              </thead>

              <tbody>
                {newsList.map((item) => (
                  <tr key={item.id} className="border-t hover:bg-gray-50 transition">
                    <td className="px-8 py-5 flex items-center gap-4">
                      <img
                        src={item.image}
                        className="h-14 w-20 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.title}
                        </p>
                        <p className="text-gray-500 text-xs line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </td>

                    <td className="px-8 py-5 text-gray-500">
                      {item.date}
                    </td>

                    <td className="px-8 py-5 text-right space-x-3">
                      <button
                        onClick={() => handleEdit(item)}
                        className="px-4 py-2 text-sm font-semibold bg-[#D4AF37] text-black 
                        rounded-lg shadow-sm hover:opacity-90 active:scale-95 
                        transition-all duration-200 cursor-pointer"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-4 py-2 text-sm font-semibold bg-red-600 text-white 
                        rounded-lg shadow-sm hover:bg-red-700 active:scale-95 
                        transition-all duration-200 cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>

      {/* SNACKBAR */}
      {snackbar && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-xl">
          {snackbar}
        </div>
      )}
    </SidebarLayout>
  );
}




