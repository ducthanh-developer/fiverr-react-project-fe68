import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import withLayout from 'hocs/withLayout';
// import FiverrDetail from '../containers/client/FiverrDetail/FiverrDetail'
import React from 'react';

function ClientLayout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default withLayout(ClientLayout);
