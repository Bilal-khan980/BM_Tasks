// AddBlogs.js
import React, { useState } from "react";

function AddBlogs() {
  const [blogtitle, setBlogTitle] = useState("");
  const [blogdesc, setBlogdesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      date: Date.now(),
      title: blogtitle,
      decs: blogdesc,
    };

    const allblogs = JSON.parse(localStorage.getItem("blogs")) || [];
    allblogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(allblogs));

    setBlogTitle("");
    setBlogdesc("");
    // clear input
  };

  return (
    <>
      <div className="bg-slate-600 p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center h-[400px] w-[400px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter blog title..."
            value={blogtitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            className="text-lg px-4 py-2 rounded-lg border border-slate-600 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-slate-500-400"
          />

          <input
            type="text"
            placeholder="Enter blog title..."
            value={blogdesc}
            onChange={(e) => setBlogdesc(e.target.value)}
            className="text-lg px-4 py-2 rounded-lg border border-slate-600 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
          <button
            type="submit"
            className="text-lg bg-slate-500 text-slate-900 font-semibold py-2 rounded-lg hover:bg-slate-200 transition"
          >
            Add Blog
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBlogs;
