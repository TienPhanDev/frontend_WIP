import React from 'react';
import NotFoundCover from 'views/NotFoundCover';
import Minimal from 'layouts/Minimal';
import WithLayout from 'WithLayout';

const FourOFourPage = () => {
  return (
    <WithLayout
      component={NotFoundCover}
      layout={Minimal}
    />
  )
};

export default FourOFourPage;