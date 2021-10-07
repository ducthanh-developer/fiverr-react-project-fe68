import Product from 'components/Product/Product';
import Slider from 'components/Slider/Slider';
import React, { Component, Fragment } from 'react';
import MovieList from './MovieList/MovieList';
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
