import { useState } from "react";
import "./App.css";
import AddBlogs from "./Components/AddBlogs";
import Showblogs from "./Components/Showblogs";

function App() {
  const [toggle, settoggle] = useState(true);

  const addblogs = () => settoggle(true);
  const showblogs = () => settoggle(false);

  return (
    <>
      <div className="bg-slate-800 h-screen w-screen flex flex-col items-center pt-6 text-white">
        <h1 className="text-4xl font-bold mb-6">BLOGS</h1>

        <div className="flex gap-4 mb-8">
          <button
            onClick={addblogs}
            className="px-6 py-2 rounded-lg font-semibold"
          >
            ADD BLOGS
          </button>

          <button
            onClick={showblogs}
            className="px-6 py-2 rounded-lg font-semibold"
          >
            SHOW BLOGS
          </button>
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          {toggle ? <AddBlogs /> : <Showblogs />}
        </div>
      </div>
    </>
  );
}

export default App;
