import React from "react";
import "./Home.scss";
import Carousel from "./Carousel/Carousel";
import Product from "./Product/Product";
import Testimonial from "./Testimonial/Testimonial";
import Selling from "./Selling/Selling";
import Marketplace from "./Marketplace/Marketplace";
import UserInformation from "../UserInformation/UserInformation";
import ListJobCategories from "../ListJobCategories/ListJobCategories";
// import BookingJob from "../DetailJobs/BookingJob/BookingJob";

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
      {/* <DetailJobs/> */}
      {/* <BookingJob/> */}
      <UserInformation/>
      <ListJobCategories/>
     
    </main>
  );
}

