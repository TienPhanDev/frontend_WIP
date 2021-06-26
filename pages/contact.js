import React from 'react';
import ContactPage from 'views/ContactPage';
import Main from 'layouts/Main';
import Head from 'next/head';
import WithLayout from 'WithLayout';

const ContactViewPage = () => {
  return (
    <>
      <Head>
        <title>Contact us</title>
      </Head>
      <WithLayout
        component={ContactPage}
        layout={Main}
      />
    </>
  )
};

export default ContactViewPage;
