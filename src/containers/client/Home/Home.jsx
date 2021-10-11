import Marketplace from 'components/Marketplace/Marketplace';
import Product from 'components/Product/Product';
import Selling from 'components/Selling/Selling';
import Slider from 'components/Slider/Slider';
import React, { Component, Fragment } from 'react';
export default class Home extends Component {
  render() {
    return (
      <>
      <Slider/>
        {/* Banner */}
        {/* Filter */}
        {/* <MovieList /> */}
        <Product/>
        <Selling/>
        <Marketplace/>
        {/* <FiverrDetail/> */}
      </>
    );
  }
}
