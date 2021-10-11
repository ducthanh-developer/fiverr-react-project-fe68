import React from "react";
import "./Home.scss";
import Carousel from "./Carousel/Carousel";
import Slider from "react-slick";
import { CheckCircleOutlined } from "@ant-design/icons";
import FiverrDetail from "../FiverrDetail/FiverrDetail";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1324,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const settingsTestimonial = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function Home() {
  return (
    <main>
      <Carousel />
      {/* Product */}
      <div className=" container Product__content">
        <h2>Popular professional services</h2>
        <Slider {...settings}>
          <div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
              alt="..."
            />
          </div>
          <div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
              alt="..."
            />
          </div>
          <div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
              alt="..."
            />
          </div>
          <div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
              alt="..."
            />
          </div>
          <div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
              alt="..."
            />
          </div>
          <div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
              alt="..."
            />
          </div>
          <div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
              alt=""
            />
          </div>
        </Slider>
      </div>

      {/* Selling */}
      <div className="Selling">
        <div className="container Selling__big ">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="Selling__left">
                <h1>
                  <div>A whole world of freelance</div>
                  talent at your fingertips
                </h1>
                <div className="Selling__content__budget">
                  <div>
                    <i>
                      <CheckCircleOutlined />
                    </i>
                    <span>The best for every budget</span>
                    <div className="Selling__infor">
                      <span>
                        Find high-quality services at every price point. No
                        hourly rates,
                      </span>
                      <br></br>
                      <span> just project-based pricing.</span>
                    </div>
                  </div>
                </div>
                <div className="Selling__content__budget">
                  <div>
                    <i>
                      <CheckCircleOutlined />
                    </i>
                    <span>The best for every budget</span>
                    <div className="Selling__infor">
                      <span>
                        Find high-quality services at every price point. No
                        hourly rates,
                      </span>
                      <br></br>
                      <span> just project-based pricing.</span>
                    </div>
                  </div>
                </div>
                <div className="Selling__content__budget">
                  <div>
                    <i>
                      <CheckCircleOutlined />
                    </i>
                    <span>The best for every budget</span>
                    <div className="Selling__infor">
                      <span>
                        Find high-quality services at every price point. No
                        hourly rates,
                      </span>
                      <br></br>
                      <span> just project-based pricing.</span>
                    </div>
                  </div>
                </div>
                <div className="Selling__content__budget">
                  <div>
                    <i>
                      <CheckCircleOutlined />
                    </i>
                    <span>The best for every budget</span>
                    <div className="Selling__infor">
                      <span>
                        Find high-quality services at every price point. No
                        hourly rates,
                      </span>
                      <br></br>
                      <span> just project-based pricing.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6  Selling__right">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="testimonials">
        <Slider {...settingsTestimonial}>
          <div className="slider-package">
            <div className="testimonial row">
              <div className="testimonial-video">
                <div className="video-modal">
                  <div className="modal-image">
                    <img
                      src="./images/Home/testimonial-video-still-lavender.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <h5 className="content-title">
                  Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                  <span className="content-logo">
                    <img
                      src="/images/Home/lavender-logo-x2.89c5e2e.png"
                      alt="logo"
                      loading="lazy"
                    />
                  </span>
                </h5>
                <blockquote className="content-domaine">
                  <i>
                    "We used Fiverr for SEO, our logo, website, copy, animated
                    videos — literally everything. It was like working with a
                    human right next to you versus being across the world."
                  </i>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="slider-package">
            <div className="testimonial row">
              <div className="testimonial-video">
                <div className="video-modal">
                  <div className="modal-image">
                    <img
                      src="./images/Home/testimonial-video-still-lavender.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <h5 className="content-title">
                  Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                  <span className="content-logo">
                    <img
                      src="/images/Home/lavender-logo-x2.89c5e2e.png"
                      alt="logo"
                      loading="lazy"
                    />
                  </span>
                </h5>
                <blockquote className="content-domaine">
                  <i>
                    "We used Fiverr for SEO, our logo, website, copy, animated
                    videos — literally everything. It was like working with a
                    human right next to you versus being across the world."
                  </i>
                </blockquote>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* Marketplace */}
      <div className="Marketplace">
        <h1>Explore the marketplace</h1>
        <div className="container Marketplace__content">
          <ul className="Marketplace__item">
            <li className="flex-item">
              <img src="../../images/market/1.jpg" alt="" />
              <h6>Graphics & Design</h6>
            </li>
            <li className="flex-item">
              <img src="../../images/market/2.jpg" alt="" />
              <h6>Digital Marketing</h6>
            </li>
            <li className="flex-item">
              <img src="../../images/market/3.jpg" alt="" />
              <h6>Writing & Translation</h6>
            </li>
            <li className="flex-item">
              <img src="../../images/market/1.jpg" alt="" />
              <h6>Video & Animation</h6>
            </li>
            <li className="flex-item">
              <img src="../../images/market/5.jpg" alt="" />
              <h6>Music & Audio</h6>
            </li>
          </ul>
        </div>

        <div className="container Marketplace__content">
          <div className="container Marketplace__content">
            <ul className="Marketplace__item">
              <li className="flex-item">
                <img src="../../images/market/1.jpg" alt="" />
                <h6>Graphics & Design</h6>
              </li>
              <li className="flex-item">
                <img src="../../images/market/2.jpg" alt="" />
                <h6>Digital Marketing</h6>
              </li>
              <li className="flex-item">
                <img src="../../images/market/3.jpg" alt="" />
                <h6>Writing & Translation</h6>
              </li>
              <li className="flex-item">
                <img src="../../images/market/1.jpg" alt="" />
                <h6>Video & Animation</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
