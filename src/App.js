import React, { useContext } from "react";
import "./tailwind.output.css";
import UploadForm from "./components/UploadForm/UploadForm";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import { ThemeContext } from "./context/theme-context";

function App() {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={
        "font-bai min-h-screen transition duration-500 ease-in-out " +
        (themeContext.theme === "light" ? "" : "bg-gray-900")
      }
    >
      <Navbar />
      <main style={{ minHeight: `calc(100vh - 10rem)` }}>
        <div>
          <h1 className="mt-12 text-indigo-600 font-bold text-3xl text-center">
            Ready to <em>free</em> your text?
            <br />
            Let's GO! 🚀
          </h1>
        </div>
        <UploadForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
