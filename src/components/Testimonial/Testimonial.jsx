import React from "react";
import "./Testimonial.scss";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function Testimonial() {
  return <div className="testimonials">
      <Slider {...settings}>
            <div className="testimonial">
                
            </div>
      </Slider>
  </div>;
}
