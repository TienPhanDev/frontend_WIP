import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, NoSsr, Grid, Button, useMediaQuery, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const useStyles = makeStyles(theme => ({
  quickStartSection: {
    '& .section-header__cta-container': {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        '& .section-header__cta-item-wrapper': {
          width: '100%',
          '&:last-child': {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          '& .MuiButtonBase-root': {
            width: '100%',
          },
        },
      },
    }
  },
  fontWeightBold: {
    fontWeight: '900',
  },
  editor: {
    paddingLeft: `${theme.spacing(2)}px !important`,
    paddingRight: `${theme.spacing(2)}px !important`,
    borderRadius: theme.spacing(1/2),
    width: '100%',
  },
  logoImg: {
    maxWidth: 100,
  },
}));

const QuickStart = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const docsButton = (
    <Button size="large" variant="outlined" color="primary" component="a" href="https://www.rocketcyber.com/contact-us">
      See reviews
    </Button>
  );

  const buyButton = (
    <Button
      size="large"
      variant="contained"
      color="primary"
      component="a"
      href="https://www.rocketcyber.com/appstore"
    >
      view app store
    </Button>
  );

  return (
    <div className={className} {...rest}>
      <Grid container justify="space-between" spacing={4}>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={6} data-aos={'fade-right'}>
              <SectionHeader
                title="Partner with RocketCyber to deliver managed security to your customers."
                subtitle="RocketCyber's Managed SOC (security operation center) is a white labeled managed service that leverages the RocketCyber Threat Monitoring Platform detecting malicious and suspicious activity across three critical attack vectors: Endpoint | Network | Cloud."
                ctaGroup={[docsButton, buyButton]}
                align={isMd ? 'left' : 'center'}
                disableGutter
                titleVariant="h4"
                titleProps={{ className: classes.fontWeightBold }}
                className={classes.quickStartSection}
              />
            </Grid>
            <Grid item container alignItems="center" xs={12} md={6} data-aos={'fade-left'}>
              <NoSsr>
                <SyntaxHighlighter language="javascript" style={vs2015} className={classes.editor}>
                  {`
> $ deploy agent install

// Everything installed!


> $ agent start

// Our SOC is powered by the RocketCyber Cloud Platform!
                `}
                </SyntaxHighlighter>
              </NoSsr>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={isMd ? 4 : 2} direction={isMd ? 'row': 'column-reverse'}>
            <Grid item xs={12} container alignItems="center" md={6} data-aos={'fade-right'}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>24x7 Monitoring</Typography>
                  <Typography color="textPrimary" variant="body1">
                  Always on threat detection in real-time
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>USA Based SOC</Typography>
                  <Typography color="textPrimary" variant="body1">
                  100% US Residents & located in Dallas, TX
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>Security Stack</Typography>
                  <Typography color="textPrimary" variant="body1">
                  RocketCyber is the developer of all technologies leveraged in our SOC Platform
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography color="primary" variant="h4" gutterBottom>No Hardware!</Typography>
                  <Typography color="textPrimary" variant="body1">
                  Our SOC is powered by the RocketCyber Cloud Platform
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} data-aos={'fade-left'}>
              <SectionHeader
                title="Built for MSPs delivering cyber security to SMBs"
                subtitle="Our SOC analysts investigate each alert, triaging the data and produce a ticket to your PSA system accompanied with the remedy details so you can focus on your operations without hiring security engineers."
                align="left"
                disableGutter
                titleVariant="h3"
                titleProps={{ className: classes.fontWeightBold }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

QuickStart.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default QuickStart;
