import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="sticky top-0 z-20 h-12 items-center justify-between flex shadow-md px-16 text-gray-600  bg-white">
      <div className="flex justify-center ">
        <h2 className=" font-semibold ">List App</h2>
      </div>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
