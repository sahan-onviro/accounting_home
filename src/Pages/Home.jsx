import React from "react";
import HeroSection from "../components/Home/HeroSection";
import ChooseSection from "../components/Home/ChooseSection";
import CanSection from "../components/Home/CanSection";
import TestiSection from "../components/Home/TestiSection";

const Home = () => {
  return (
    <>
      <main>
        <HeroSection />
        <ChooseSection />
        <CanSection />
        <TestiSection />
        {/* <section className="brand-section section-break">
          <div className="container mx-auto overflow-hidden">
            <div className="heading-wrapper text-center pb-14">
              <h2 className="heading-ext inline-block py-2 font-semibold text-3xl">Features In</h2>
            </div>
            <div className="brand-marquee overflow-hidden">
              <div className="marquee-wrapper">
                {brandData?.map((item, index) => (
                  <div className="brand-box">
                    <figure key={index} className="h-[100px] w-[100px]">
                      <img
                        src={item?.logo}
                        alt={item?.title}
                        className="object-scale-down"
                      />
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
};

export default Home;
