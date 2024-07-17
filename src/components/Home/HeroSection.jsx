import React from "react";
import { IoPlayOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1 flex items-center">
            <div className="banner-text">
              <article className="mb-6">
                <h1 className="mb-4 text-balance text-4xl font-semibold leading-[50px] text-black text-opacity-75">
                  <span className="mr-2 font-bold text-primary">
                    IRD Verified
                  </span>
                  Software
                  <span className="block">
                    for businesses in Nepal
                  </span>
                </h1>
                <p className="max-w-[500px] leading-7">
                  Web-based accounting solution and Standalone POS for Jewellery, Restaurant and Online Billing Software.
                </p>
              </article>
              <div className="btn-wrapper flex gap-5 font-medium">
                <Link to="" className="btn-primary">
                  <span className="flex items-center gap-2 px-4 py-2">
                    <TfiWorld />
                    Get Started on Web
                  </span>
                </Link>
                <Link
                  to=""
                  className="btn-transparent border-black text-black after:bg-black hover:text-primary"
                >
                  <span className="flex items-center gap-2 px-4 py-2">
                    <IoPlayOutline />
                    Get Demo
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <figure className="py-14">
              <img src="./assets/images/banner.png" alt="banner" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
