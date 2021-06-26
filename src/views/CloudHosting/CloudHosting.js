import React from 'react';
import { SectionAlternate } from 'components/organisms';
import {
  Features,
  Hero,
  Storage,
  Support,
} from './components';

import {
  features,
} from './data';

const CloudHosting = () => {
  return (
    <div>
      <Hero />
      <SectionAlternate>
        <Features data={features} />
      </SectionAlternate>
      <Storage id="explore"/>
      <SectionAlternate>
        <Support />
      </SectionAlternate>
    </div>
  );
};

export default CloudHosting;
