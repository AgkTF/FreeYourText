import React from "react";
import UploadForm from "./components/UploadForm/UploadForm";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div>
        <h1 className="mt-6 text-indigo-800 font-medium text-2xl text-center">
          Ready to <em>free</em> your text?
          <br />
          Let's GO! 🚀
        </h1>
      </div>
      <UploadForm />
      <Footer />
    </div>
  );
}

export default App;
