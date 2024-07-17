import React from "react";
// import Laptop from "../Global/Laptop";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { candoList } from "../../Global/Data/HomeData";

const CanSection = () => {
  return (
    <section className="can-do-section py-16">
      <div className="container mx-auto">
        <div className="heading-wrapper text-center pb-14">
          <h2 className="heading-title ">
            What can you do with Accounting App
          </h2>
        </div>
        <div className="can-do-content">
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-1">
              {/* <div className="w-full max-w-[500px]">
                <Laptop single={false}>
                  <Swiper
                    slidesPerView={1}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {canData?.map((item, index) => (
                      <SwiperSlide key={index}>
                        <figure className="h-full">
                          <img
                            src={item?.img}
                            alt={item?.title}
                            className="!h-full w-full object-cover object-center"
                          />
                        </figure>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Laptop>
              </div> */}
              <figure className="mx-auto max-w-[500px]">
                <img src="./assets/images/can.jpg" alt="" />
              </figure>
            </div>
            <div className="col-span-1">
              <div className="can-do-text leading-8">
                <p>
                Managing finances can be challenging, but with the right tools, it becomes much easier. The Accounting App offers a wide range of features designed to streamline your financial operations, ensuring accuracy and efficiency in your business processes. Here's a closer look at what you can do with our app:
                </p>
                <ul className="columns-2 font-medium">
                  {candoList.map((item, index) => (
                    <li key={index} className="[&:not(:last-child)]:mb-3">{item?.li}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanSection;
