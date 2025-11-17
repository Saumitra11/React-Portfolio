import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const nameClick = () => {
    const home = document.querySelector("#portal");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;

      setSticky(window.scrollY > 0);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed w-full left-0 top-0 z-[999] transition-all duration-300 ${
        sticky ? "bg-gray-900 text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7" onClick={nameClick} style={{ cursor: "pointer" }}>
          <h4 className="text-4xl uppercase font-bold">
            Sau<span className="text-cyan-600">mi</span>tra
          </h4>
        </div>
        <div className="text-gray-300 md:block hidden px-7 py-2 font-medium bg-gray-900 rounded-bl-full">
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[998] ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5 `}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 h-1 bg-cyan-600 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </nav>
  );
};

export default Navbar;
