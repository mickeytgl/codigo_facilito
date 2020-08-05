import React, { useState } from "react";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div id="app">
      <Slider setOpen={setOpen} open={open} />
      <Navbar setOpen={setOpen} />
      <div className="relative mx-auto mt-16 max-w-screen-lg">
        <h1 className="text-4xl font-extrabold tracking-wide text-center md:text-7xl tex">
          Programar es el futuro
        </h1>
        <div className="mx-auto max-w-screen-sm">
          <p className="px-4 mt-6 text-2xl text-center text-black opacity-50">
            Aprende desde tu casa con más de{" "}
            <span className="font-extrabold">220 cursos</span> online prácticos
            en más de{" "}
            <span className="font-extrabold">88 tecnologías distintas</span>
          </p>
        </div>
        <div className="flex justify-center">
          <button className="px-12 py-6 mt-6 text-lg text-white uppercase bg-green-500 rounded-full shadow-lg hover:bg-green-600">
            Explorar Cursos
          </button>
        </div>
        <div className="flex justify-center">
          <img
            className="max-w-full "
            src="https://codigofacilito.com/assets/aprendiendoencasa/ilustracion_home-64fb135ec3bb180951a9821f066a96d6369ccc0b78852a68e8e96b983680feed.png"
            alt=""
          />
        </div>
        <p className="px-2 pb-10 text-sm text-center text-gray-600">
          Aprende desde tu casa con más de{" "}
          <span className="font-extrabold">220 cursos</span> online prácticos en
          más de{" "}
          <span className="font-extrabold">88 tecnologías distintas</span>
        </p>
      </div>
      <div className="items-center bg-gray-100">
        <div className="py-20">
          <div className="px-2">
            <h2 className="text-3xl font-extrabold">
              ¿Qué puedo aprender aquí?_
            </h2>
            <p className="mt-6 text-sm text-gray-700">
              Contamos con una biblioteca de más de 9525 temas en distintos
              tópicos de programación.
            </p>
            <div className="flex">
              <div>
                <img
                  src="https://codigofacilito.com/assets/svg/hello_world-c24cac577f9b616f5d1c1bd05bf3b5985ffa03441aa1c1729fd80d9e6592d953.svg"
                  alt="Los fundamentos"
                  class="h-16"
                />
                <h3>Los fundamentos</h3>
                <p>¿Eres nuevo programando? Estás en el lugar indicado.</p>
              </div>
              <div>
                <img
                  src="https://codigofacilito.com/assets/svg/web-63d7cf1b9cb9df8fc45400cea57d08df0ef308e55f3ddf7d4b14be99a59e676b.svg"
                  alt="Los fundamentos"
                  class="h-16"
                />
                <h3>Desarrollo Web</h3>
                <p>
                  Domina HTML, CSS y JavaScript para el frontend. JavaScript,
                  Go, Ruby y más para el backend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
