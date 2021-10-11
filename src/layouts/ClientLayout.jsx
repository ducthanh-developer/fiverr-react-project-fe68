import Header from 'components/Header/Header';
import withLayout from 'hocs/withLayout';
import React from 'react';

function ClientLayout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}

export default withLayout(ClientLayout);
