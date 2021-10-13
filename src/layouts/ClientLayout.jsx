import Header from 'components/Header/Header';
import withLayout from 'hocs/withLayout';
// import FiverrDetail from '../containers/client/FiverrDetail/FiverrDetail'
import React from 'react';

function ClientLayout(props) {
  return (
    <>
      <Header />
      {props.children}
{/* <FiverrDetail/> */}

    </>
  );
}

export default withLayout(ClientLayout);
