import React, { useState, useEffect } from "react";

function Showblogs() {
  const [blogs, setBlogs] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // track which blog is being edited
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");

  useEffect(() => {
    const storedblogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedblogs);
  }, []);

  // ✅ Delete blog
  const handleDelete = (index) => {
    let storedblogs = JSON.parse(localStorage.getItem("blogs")) || [];
    storedblogs.splice(index, 1);
    localStorage.setItem("blogs", JSON.stringify(storedblogs));
    setBlogs(storedblogs);
  };

  // ✅ Start editing
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditTitle(blogs[index].title);
    setEditDesc(blogs[index].desc || blogs[index].decs);
  };

  // ✅ Save edited blog
  const handleSave = (index) => {
    let storedblogs = JSON.parse(localStorage.getItem("blogs")) || [];
    storedblogs[index].title = editTitle;
    storedblogs[index].desc = editDesc;
    localStorage.setItem("blogs", JSON.stringify(storedblogs));
    setBlogs(storedblogs);

    setEditingIndex(null); // close edit mode
  };

  return (
    <div className="p-6 bg-slate-800 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">BLOGS</h1>

      {blogs.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        <div className="flex flex-col gap-4">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-slate-700 p-4 rounded-xl shadow-lg flex flex-col"
            >
              {editingIndex === index ? (
                <>
                  {/* Edit Mode */}
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="mb-2 px-2 py-1 rounded text-black"
                  />
                  <textarea
                    value={editDesc}
                    onChange={(e) => setEditDesc(e.target.value)}
                    className="mb-2 px-2 py-1 rounded text-black"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSave(index)}
                      className="px-3 py-1 bg-green-500 hover:bg-green-600 rounded text-white text-sm"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingIndex(null)}
                      className="px-3 py-1 bg-gray-500 hover:bg-gray-600 rounded text-white text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* View Mode */}
                  <h2 className="text-xl font-semibold">{blog.title}</h2>
                  <p className="text-slate-300">{blog.desc || blog.decs}</p>
                  <span className="text-sm text-slate-400 mb-2">
                    {new Date(blog.date).toLocaleString()}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded text-white text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-white text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Showblogs;
