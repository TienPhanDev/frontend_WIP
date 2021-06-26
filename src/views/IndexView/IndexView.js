import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Community, QuickStart, Hero } from './components';

const gallery = [
  {
    image: {
      src: 'https://images.generated.photos/c_wUu9U2zbauOcQ02TyY9d9gJgMKZKf5nP_DXhlvzU0/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwOTg4NjAuanBn.jpg',
      srcSet: 'https://images.generated.photos/c_wUu9U2zbauOcQ02TyY9d9gJgMKZKf5nP_DXhlvzU0/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwOTg4NjAuanBn@2x.jpg 2x',
    },
    title: 'gallery',
    cols: 1,
  },
  {
    image: {
      src: 'https://images.generated.photos/68VqOVnWBru8dgrYX6BZNkIXXpLvtUB3fOoHzIevgL8/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzNjM1NDQuanBn.jpg',
      srcSet: 'https://images.generated.photos/68VqOVnWBru8dgrYX6BZNkIXXpLvtUB3fOoHzIevgL8/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzNjM1NDQuanBn@2x.jpg 2x',
    },
    title: 'gallery',
    cols: 2,
  },
  {
    image: {
      src: 'https://images.generated.photos/PMShQVxEDRKXT33nM5riVq-p69nHFl8z9ll7FaD_lPQ/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3OTI5ODAuanBn.jpg',
      srcSet: 'https://images.generated.photos/PMShQVxEDRKXT33nM5riVq-p69nHFl8z9ll7FaD_lPQ/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3OTI5ODAuanBn@2x.jpg 2x',
    },
    title: 'gallery',
    cols: 1,
  },
  {
    image: {
      src: 'https://images.generated.photos/tc_qz-kQ0-b4tKgO_l0e3u2KnlESwrldZaH2jWm4v_4/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NTc3NTYuanBn.jpg',
      srcSet: 'https://images.generated.photos/tc_qz-kQ0-b4tKgO_l0e3u2KnlESwrldZaH2jWm4v_4/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NTc3NTYuanBn@2x.jpg 2x',
    },
    title: 'gallery',
    cols: 1,
  },
  {
    image: {
      src: 'https://images.generated.photos/isLKqdzFc_VmiT_oOlDYOVClmthIwCJ_dCGk9a6slFA/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3NTYxMTYuanBn.jpg',
      srcSet: 'https://images.generated.photos/isLKqdzFc_VmiT_oOlDYOVClmthIwCJ_dCGk9a6slFA/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3NTYxMTYuanBn@2x.jpg 2x',
    },
    title: 'gallery',
    cols: 1,
  },
];

const useStyles = makeStyles(() => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Hero themeMode={themeMode} />
      <SectionAlternate className={classes.sectionAlternateNoPaddingTop}>
        <QuickStart />
      </SectionAlternate>
      <Section narrow>
        <Community data={gallery} />
      </Section>
    </div>
  );
};

export default IndexView;
