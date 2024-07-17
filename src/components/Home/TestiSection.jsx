import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

const TestiSection = () => {
  const testiData = [
    {
      img: "./assets/images/dummy.jpg",
      title: " Jewelry Store Efficiency Boost",
      location: "Gahana Pasal",
      review:
        "Managing the finances of a jewelry store is complex, but this software has streamlined the process. It's excellent for keeping track of inventory costs and sales. We appreciate how it simplifies our financial reporting, making it easier to manage our business. This software is a must-have for jewelers looking for efficiency.",
    },
    {
      img: "./assets/images/dummy.jpg",
      title: "Perfect for Restaurants",
      location: "Hotel Swad",
      review:
        "This software has been a fantastic addition to our restaurant. It handles our financial records effortlessly and integrates smoothly with our management system. We've found it particularly useful for monitoring our cash flow and profitability. It's a reliable tool that every restaurant should consider.",
    },
    {
      img: "./assets/images/dummy.jpg",
      title: "Small Business Savior",
      location: "Nepal General Suppliers",
      review:
        "This accounting software has been a game-changer for our small business. It's intuitive and easy to use, making financial management a breeze. We've noticed a significant improvement in our financial tracking and reporting since we started using it. The customer support team is responsive and always ready to help with any questions we have.",
    },
    {
      img: "./assets/images/dummy.jpg",
      title: " Essential for Startups",
      location: "Hamro AI",
      review:
        "As a startup, managing finances can be daunting, but this software simplifies everything. It's user-friendly and perfectly suited for our needs. The setup was quick, and the software integrates well with our other tools. We've found it invaluable for keeping our books in order and making informed financial decisions.",
    },
    {
      img: "./assets/images/dummy.jpg",
      title: "Restaurant Game-Changer",
      location: "Hotel Musu Musu",
      review:
        "Running a restaurant requires precise financial management, and this software delivers. It's made tracking daily sales and expenses much easier. The integration with our POS system is seamless, and the reports are clear and helpful. It's been a fantastic addition to our restaurant operations.",
    },
    
    {
      img: "./assets/images/dummy.jpg",
      title: "Perfect for Restaurants",
      location: "Hotel Swad",
      review:
        "This software has been a fantastic addition to our restaurant. It handles our financial records effortlessly and integrates smoothly with our management system. We've found it particularly useful for monitoring our cash flow and profitability. It's a reliable tool that every restaurant should consider.",
    },
    {
      img: "./assets/images/dummy.jpg",
      title: "Tailored for Jewelers",
      location: "Diamond Palace",
      review:
        "As a jeweler, I need precise financial management, and this software provides just that. It makes tracking our finances straightforward and hassle-free. The customization options are great for adapting to our specific needs. Overall, it’s been a very positive experience using this software.",
    },
  ];
  return (
    <section className="testi-section section-break bg-[#fbfbfb]">
      <div className="container mx-auto">
        <div className="heading-wrapper">
          <h2 className="heading-title">How You Feels?</h2>
        </div>
        <div className="testi-wrapper">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testiData.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="testi-box h-full overflow-hidden rounded-xl bg-white p-5"
                  key={index}
                >
                  <div className="test-info flex gap-4 pb-4">
                    <figure className="h-[80px] w-[80px] overflow-hidden rounded-[50%]">
                      <img src={item?.img} alt={item?.title} />
                    </figure>
                    <article>
                      <h4 className="text-xl font-medium">{item?.title}</h4>
                      <p className="text-base opacity-70">{item?.location}</p>
                    </article>
                  </div>
                  <p>{item?.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestiSection;
