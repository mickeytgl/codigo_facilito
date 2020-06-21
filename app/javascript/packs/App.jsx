import React, { useState, useEffect } from "react";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div id="app">
      <Slider setOpen={setOpen} open={open} />
      <Navbar setOpen={setOpen} />
      <div className="max-w-screen-lg mx-auto mt-16 relative">
        <h1 className="text-4xl md:text-7xl tex font-extrabold tracking-wide text-center">
          Programar es el futuro
        </h1>
        <div className="max-w-screen-sm mx-auto">
          <p className="px-4 mt-6 text-2xl text-center text-black opacity-50">
            Aprende desde tu casa con más de{" "}
            <span className="font-extrabold">220 cursos</span> online prácticos
            en más de{" "}
            <span className="font-extrabold">88 tecnologías distintas</span>
          </p>
        </div>
        <div className="flex justify-center">
          <button className="mt-6 text-white uppercase text-lg px-12 py-6 rounded-full bg-green-500 hover:bg-green-600 shadow-lg">
            Explorar Cursos
          </button>
        </div>
        <div className="flex justify-center">
          <img
            className=" max-w-full"
            src="https://codigofacilito.com/assets/aprendiendoencasa/ilustracion_home-64fb135ec3bb180951a9821f066a96d6369ccc0b78852a68e8e96b983680feed.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default App;
