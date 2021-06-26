import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Features,
  Solutions,
  Subscription,
} from './components';

import {
  features,
  advantages,
} from './data';

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionAlternate: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 40%, ${theme.palette.primary.dark} 0%)`,
  },
}));

const Enterprise = () => {
  const classes = useStyles();

  return (
    <div>
      <SectionAlternate>
        <Solutions data={features} />
      </SectionAlternate>
      <Section>
        <Features data={advantages} />
      </Section>
      <SectionAlternate innerNarrowed className={classes.sectionAlternate}>
        <Subscription />
      </SectionAlternate>
    </div>
  );
};

export default Enterprise;
