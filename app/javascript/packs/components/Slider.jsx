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
        className={`cursor-default lg:hidden fixed z-10 h-full w-full inset-0 bg-transparent ${
          open ? "" : "hidden"
        }`}
        onClick={() => setOpen(false)}
      ></button>
      <div
        className={`transform lg:hidden ease-in duration-500 shadow-2xl top-0 fixed w-sm z-10 bg-white  h-screen ${
          open ? "" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="pt-2 text-sm border-b">
            <a
              href="#"
              className="block w-full py-2 pl-3 text-left hover:bg-gray-300"
            >
              Inicio
            </a>
            <a
              href="#"
              className="block w-full py-2 pl-3 text-left hover:bg-gray-300"
            >
              Cursos
            </a>
            <a
              href="#"
              className="block w-full py-2 pl-3 text-left hover:bg-gray-300"
            >
              Artículos
            </a>
            <a
              href="#"
              className="block w-full py-2 pl-3 text-left hover:bg-gray-300"
            >
              Talleres
            </a>
            <a
              href="#"
              className="block w-full py-2 pl-3 text-left hover:bg-gray-300"
            >
              Especialidades
            </a>
            <a
              href="#"
              className="block w-full py-2 pl-3 mb-2 text-left text-teal-500 hover:bg-gray-300"
            >
              Soporte y Ayuda
            </a>
          </div>
          <div className="pt-2 text-sm">
            <a href="#" className="block w-full py-2 pl-3 mb-2 text-left">
              Iniciar Sesion
            </a>
            <a href="#" className="block w-full py-2 pl-3 mb-2 text-left">
              Crear Cuenta
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
