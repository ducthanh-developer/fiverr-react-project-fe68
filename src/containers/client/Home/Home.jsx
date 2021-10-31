import React from "react";
import "./Home.scss";
import Carousel from "./Carousel/Carousel";
import Product from "./Product/Product";
import Testimonial from "./Testimonial/Testimonial";
import Selling from "./Selling/Selling";
import Marketplace from "./Marketplace/Marketplace";
import HinhAnh from "../UserInformation/UploadImgUser/HinhAnh";
// import LoadImg from "../UserInformation/UploadImgUser/HinhAnh";


export default function Home() {
  return (
    <main>
      {/* Carousel */}
      <Carousel />

      {/* Product */}
      <Product />

      {/* Selling */}
      <Selling />

      {/* Testimonial */}
      <Testimonial />

      {/* Marketplace */}
      <Marketplace />
      {/* <LoadImg/> */}
      <HinhAnh/>
     
    </main>
  );
}

