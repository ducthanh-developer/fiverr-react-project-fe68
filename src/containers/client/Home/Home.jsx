import Marketplace from 'components/Marketplace/Marketplace';
import Product from 'components/Product/Product';
import Selling from 'components/Selling/Selling';
import Slider from 'components/Slider/Slider';
import Testimonial from 'components/Testimonial/Testimonial';
import React, { Component, Fragment } from 'react';
import FiverrDetail from '../FiverrDetail/FiverrDetail';
export default class Home extends Component {
  render() {
    return (
      <>
      <Slider/>
        
        <Product/>
        <Selling/>
        <Testimonial />
        <Marketplace/>
        <FiverrDetail/>
      </>
    );
  }
}
