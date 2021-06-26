import React from 'react';
import CompanyTerms from 'views/CompanyTerms';
import Main from 'layouts/Main';
import Head from "next/head"
import WithLayout from 'WithLayout';

const CompanyTermsPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy RocketCyber LLC</title>
      </Head>
      <WithLayout
        component={CompanyTerms}
        layout={Main}
      />
    </>
  )
};

export default CompanyTermsPage;
