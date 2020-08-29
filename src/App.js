import React from "react";
import UploadForm from "./components/UploadForm/UploadForm";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main style={{ minHeight: `calc(100vh - 5rem)` }}>
        <div>
          <h1 className="mt-6 text-indigo-800 font-medium text-2xl text-center">
            Ready to <em>free</em> your text?
            <br />
            Let's GO! 🚀
          </h1>
        </div>
        <UploadForm />
      </main>
      <div className="lg:h-16"></div>
      <Footer />
    </div>
  );
}

export default App;
