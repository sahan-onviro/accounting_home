import React from "react";
import { chooseData } from "../../Global/Data/HomeData";

const ChooseSection = () => {
  return (
    <section className="choose-section bg-[#fbfbfb] py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-8">
          {chooseData?.map((item, index) => (
            <div className="col-span-1" key={index}>
              <div className="choose-box flex max-w-[400px] flex-nowrap gap-4">
                <figure className="h-[80px] w-[80px] flex-none">
                  <img
                    src={item?.icon}
                    alt={item?.title}
                    className="object-scale-down"
                  />
                </figure>
                <article>
                  <h3 className="heading-ext mb-4 inline-block pb-1 text-xl font-medium">
                    {item?.title}
                  </h3>
                  <p className="line-clamp-3 leading-7">{item?.detail}</p>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
