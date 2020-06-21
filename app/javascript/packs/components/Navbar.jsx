import React from "react";

const Navbar = () => (
  <nav className="flex items-center justify-between h-10 mx-2 mt-1">
    <button
      onClick={() => setOpen(true)}
      className="fill-current hover:text-blue-700 focus:text-blue-700 focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          className="heroicon-ui"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
      </svg>
    </button>
    <img
      src="https://codigofacilito.com/assets/iso-114f4aa86ce46b3c3b2040343eb915624cb2a54be54e1f8a59807ff3c4d1eb4b.png"
      alt="Logo"
      className="h-8"
    />
    <input
      className="w-2/3 h-8 pl-1 text-sm placeholder-gray-500 bg-gray-200 rounded focus:outline-none border-b border-blue-700"
      type="Search"
      placeholder="Buscar..."
    />
    <button className="fill-current hover:text-blue-700 focus:text-blue-700 focus:outline-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
      </svg>
    </button>
  </nav>
);

export default Navbar;
