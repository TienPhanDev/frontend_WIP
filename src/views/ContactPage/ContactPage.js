import React from 'react';
import { SectionAlternate } from 'components/organisms';
import { Contact, Form, Hero } from './components';
import { mapData } from './data';

const ContactPage = () => (
  <div>
    <Hero />
    <Contact data={mapData} />
    <SectionAlternate>
      <Form />
    </SectionAlternate>
  </div>
);

export default ContactPage;
