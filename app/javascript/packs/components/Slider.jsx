import React, { useEffect } from "react";
import "../application.css";

const Slider = ({ open, setOpen }) => {
  const handleEscape = e => {
    if (e.key == "Esc" || e.key == "Escape") {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  });

  return (
    <>
      <button
        tabIndex="-1"
        className={`cursor-default sm:hidden fixed z-10 h-full w-full inset-0 bg-transparent ${
          open ? "" : "hidden"
        }`}
        onClick={() => setOpen(false)}
      ></button>
      <div
        style={open ? { marginLeft: "0px" } : { marginLeft: "-400px" }}
        className={`transition-all sm:hidden ease-in duration-500 slider shadow-2xl top-0 fixed w-2/5 z-10 bg-white  h-screen ${
          open ? "open" : ""
        }`}
      >
        <div>
          <div className="pt-2 text-sm border-b">
            <a
              href="#"
              className="py-2 block w-full pl-3 text-left hover:bg-gray-300"
            >
              Inicio
            </a>
            <a
              href="#"
              className="py-2 block w-full pl-3 text-left hover:bg-gray-300"
            >
              Cursos
            </a>
            <a
              href="#"
              className="py-2 block w-full pl-3 text-left hover:bg-gray-300"
            >
              Artículos
            </a>
            <a
              href="#"
              className="py-2 block w-full pl-3 text-left hover:bg-gray-300"
            >
              Talleres
            </a>
            <a
              href="#"
              className="py-2 block w-full pl-3 text-left hover:bg-gray-300"
            >
              Especialidades
            </a>
            <a
              href="#"
              className="py-2 block w-full pl-3 text-left hover:bg-gray-300 text-teal-500 mb-2"
            >
              Soporte y Ayuda
            </a>
          </div>
          <div className="pt-2 text-sm">
            <a href="#" className="py-2 block w-full pl-3 text-left mb-2">
              Iniciar Sesion
            </a>
            <a href="#" className="py-2 block w-full pl-3 text-left mb-2">
              Crear Cuenta
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
