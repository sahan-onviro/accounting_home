import React from "react";

const Laptop = ({ single, children, img }) => {
  return (
    <>
      <div class="laptop">
        <div class="laptop__screen">
          {single ? <img src={img} alt="Screen" /> : (children)}
        </div>
        <div class="laptop__bottom">
          <div class="laptop__under"></div>
        </div>
        <div class="laptop__shadow"></div>
      </div>
    </>
  );
};

export default Laptop;
