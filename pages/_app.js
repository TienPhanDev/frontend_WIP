import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import '../src/assets/css/index.css';
import 'aos/dist/aos.css';
export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
