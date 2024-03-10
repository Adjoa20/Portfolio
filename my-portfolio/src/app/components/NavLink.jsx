'use client'

// import Link from "next/link";

// const NavLink = ({ href, title }) => {
//   return (
//     <Link
//       href={href}>
//       <a className="block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white"> {title}</a>
//    </Link>
//   );
// };

// export default NavLink;


// NavLink.js
import React from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href}>
      <a className="text-white hover:text-slate-200">{title}</a>
    </Link>
  );
};

export default NavLink;
