'use client'

import React from "react";


const NavLink = ({ path, title }) => {
  return (
    <a href={path} className="block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white">
      {title}
    </a>
  );
};

export default NavLink;
