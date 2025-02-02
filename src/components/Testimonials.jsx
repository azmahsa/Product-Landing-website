import React from "react";
//*import Component
import TestimonialsSlider from "./TestimonialsSlider";

const Testimonials = () => {
  return (
    <section>
      <div className=" container-fluid mx-auto">
        <div
          className=" bg-accent-primary min-h-[600px] "
          data-aos="fade-up"
          data-aos-offset="300"
        >
          <div className="flex flex-col justify-center px-2 xl:px-0 h-[800px] ">
            <h2 className="text-[40px] font-bold leading-tight text-center mb-[80px] text-white">
              Testimonials
            </h2>
            <TestimonialsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
