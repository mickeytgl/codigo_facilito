import React from "react";

const Navbar = ({ setOpen }) => (
  <nav className="flex items-center justify-between h-10 mx-2 mx-auto mt-3 max-w-screen-lg">
    <button onClick={() => setOpen(true)} className="w-12 h-12 px-2 lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        alt="Mobile Menu"
      >
        <path
          className="fill-current lg:hidden hover:text-blue-700 focus:text-blue-700 focus:outline-none"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
      </svg>
    </button>
    <img
      src="https://codigofacilito.com/assets/logo-cbf2a784ebee5d642aa7b8182df3e388d4feba0a23577eed1d2747fa05861f73.png"
      alt="Logo"
      className="hidden h-6 pl-6 pr-4 md:block lg:pl-2 lg:h-8"
    />
    <img
      src="https://codigofacilito.com/assets/iso-114f4aa86ce46b3c3b2040343eb915624cb2a54be54e1f8a59807ff3c4d1eb4b.png"
      alt="Minimal Logo"
      className="h-8 px-4 md:hidden"
    />
    <a href="#" className="hidden mx-10 text-sm text-gray-500 lg:block">
      Cursos
    </a>
    <button className="hidden ml-56 mr-10 lg:block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="w-4 h-4 text-gray-500 fill-current"
      >
        <path
          class="heroicon-ui"
          d="M4 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        />
      </svg>
    </button>
    <input
      className="w-full h-8 pl-1 ml-2 sm:ml-0 text-sm placeholder-gray-500 bg-gray-100 border-b border-blue-700 rounded focus:outline-none"
      type="Search"
      placeholder="Buscar..."
    />
    <button className="px-4 fill-current md:hidden hover:text-blue-700 focus:text-blue-700 focus:outline-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
      </svg>
    </button>
    <button className="hidden ml-6 md:block lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="w-4 h-4 text-gray-500 fill-current"
      >
        <path
          class="heroicon-ui"
          d="M4 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        />
      </svg>
    </button>
    <a href="#" className="hidden mx-12 text-sm text-gray-500 md:block">
      Ingresar
    </a>
  </nav>
);

export default Navbar;
