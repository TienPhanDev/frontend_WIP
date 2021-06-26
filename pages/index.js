import React from 'react';
import IndexView from 'views/IndexView';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const IndexPage = () => {
  return (
    <WithLayout
      component={IndexView}
      layout={Main}
    />
  )
};

export default IndexPage;
