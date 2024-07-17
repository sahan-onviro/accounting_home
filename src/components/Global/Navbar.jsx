import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { routeData } from "../../App";

const Navbar = () => {
  const headerRef = useRef(null);
  const handleScroll = () => {
    if (headerRef.current) {
      const isScrolled = window.scrollY > 0;
      headerRef.current.classList.toggle("scrolled", isScrolled);
    }
  };
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      ref={headerRef}
      className="[&.scrolled]:inset-x-0 [&.scrolled]:top-0 [&.scrolled]:[box-shadow:0_3px_10px_0px_rgb(0_0_0_/_11%)]
    "
    >
      <nav className="container mx-auto flex items-center justify-between py-2 ">
        <Link href="/" className="block">
          <figure className="h-[60px]">
            <img src="./assets/images/logo.png" alt="Accounting" />
          </figure>
        </Link>
        <div className="nav-links text-base font-medium">
          <ul className="flex items-center gap-10">
            {routeData?.map((item, index) => (
              <li key={index}>
                <NavLink to={item?.path} className="relative py-1">
                  {item?.title}
                </NavLink>
              </li>
            ))}
            <li>
              <div className="btn-wrapper">
                <Link to={"/"} className="btn-primary px-[30px] py-[10px]">
                  <span>Get Started</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
