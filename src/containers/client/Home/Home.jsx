import Product from 'components/Product/Product';
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
      </>
    );
  }
}
