import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  });
  const menuLinks = [
    {
      name: "PORTAL",
      link: "#portal",
    },
    {
      name: "ME",
      link: "#me",
    },
    {
      name: "SKILLS",
      link: "#skills",
    },
    {
      name: "WORKS",
      link: "#works",
    },
    {
      name: "CONNECT",
      link: "#connect",
    },
  ];
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-gray-900 text-white" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between ">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold ">
            Sau<span className="text-cyan-600">mit</span>ra
          </h4>
        </div>
        <div className="text-gray-300 md:block hidden px-7 py-2 font-medium bg-transparent">
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
