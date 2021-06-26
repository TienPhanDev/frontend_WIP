import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  Divider,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { SectionHeader, DescriptionCta } from 'components/molecules';
import { Section, CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    '& .description-cta__button-group': {
      flexWrap: 'nowrap',
    },
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(5, 0),
    },
  },
  textWhite: {
    color: 'white',
  },
  cardHighlighted: {
    background: theme.palette.primary.dark,
  },
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
    width: 30,
    height: 30,
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  link: {
    color: theme.palette.primary.main,
  },
}));

const CompanyTerms = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <>
          <DescriptionCta
            title="RocketCyber"
            subtitle="15950 Dallas Parkway Suite 400, Dallas TX 75248"
            primaryCta={
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => window.print()}
              >
                Print
              </Button>
            }
            align={'left'}
            titleProps={{
              className: classes.fontWeightBold,
              color: 'textPrimary',
            }}
            subtitleProps={{
              color: 'textSecondary',
            }}
          />
          <Divider className={classes.divider} />
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={8}>
              <SectionHeader
                title="Privacy Policy"
                subtitle="Last updated 10.04.2020"
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
              />
              <SectionHeader
                title="Summary"
                subtitle="This Privacy Policy explains how personal information is collected and used by RocetCyber, LLC ('RocketCyber', 'we', 'us'). This Privacy Policy applies to the visitors of the RocketCyber website at https://www.rocketcyber.com and the customers of RocketCyber's service (“Service”)."
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <List className={classes.list}>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <Avatar
                      src="/images/illustrations/green-check2.svg"
                      className={classes.checkBox}
                    />
                  </ListItemAvatar>
                  <Typography variant="body1" color="textPrimary">
                    We use your personal data to provide and improve the
                    Service. By using the Service, you agree to the collection
                    and use of information in accordance with this Privacy
                    Policy.
                  </Typography>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <Avatar
                      src="/images/illustrations/green-check2.svg"
                      className={classes.checkBox}
                    />
                  </ListItemAvatar>
                  <Typography variant="body1" color="textPrimary">
                    “CONTENT” means source code, photos, images, vectors, moving
                    images, animations, films, videos, audiovisual works, or
                    other media together with all associated keywords, metadata,
                    and/or titles.
                  </Typography>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <Avatar
                      src="/images/illustrations/green-check2.svg"
                      className={classes.checkBox}
                    />
                  </ListItemAvatar>
                  <Typography variant="body1" color="textPrimary">
                    “WEBSITE” means the service and{' '}
                    <a href="/" className={classes.link}>
                      https://rocketcyber.com
                    </a>{' '}
                    and subsidiary websites.
                  </Typography>
                </ListItem>
              </List>
              <SectionHeader
                title="Communication Preferences"
                subtitle="By using our websites, Service, or otherwise engaging or providing personal information to us, you agree that we may communicate with you electronically regarding security, privacy and administrative issues relating to your use. For example, if we learn of a security system's breach, we may attempt to notify you electronically by posting a notice on our websites, sending an email, or otherwise contacting you."
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <List className={classes.list}></List>
              <SectionHeader
                title="Additional terms"
                subtitle="We periodically update this Privacy Policy. We will post any privacy policy changes on this page and, if the changes are material, we may also notify you by other means prior to the changes taking effect, such as by posting a notice on our websites or sending you a notification. By continuing to use our website after such revisions are in effect, you accept and agree to the revisions and to abide by them."
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <List className={classes.list}>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <Avatar
                      src="/images/illustrations/green-check2.svg"
                      className={classes.checkBox}
                    />
                  </ListItemAvatar>
                  <Typography variant="body1" color="textPrimary">
                    We may need to request specific information from you to help
                    us confirm your identity and ensure your right to access the
                    information or to exercise any of your other rights.
                  </Typography>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <Avatar
                      src="/images/illustrations/green-check2.svg"
                      className={classes.checkBox}
                    />
                  </ListItemAvatar>
                  <Typography variant="body1" color="textPrimary">
                    We ensure appropriate technical and physical security
                    measures to protect your personal data which is transmitted,
                    stored or otherwise processed by us, from accidental or
                    unlawful destruction, loss, alteration, unauthorized
                    disclosure of, or access.
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={isMd ? 4 : 2} direction="column">
                <Grid item xs={12}>
                  <CardBase withShadow className={classes.cardHighlighted}>
                    <SectionHeader
                      title="Need to reach us?"
                      subtitle="If you have any questions or concerns about RocketCyber’s handling of your Personal Data, or about this Policy, please contact our Privacy Officer using the following link below"
                      ctaGroup={[
                        <Button
                          color="secondary"
                          variant="contained"
                          href="/contact"
                        >
                          Message us
                        </Button>,
                      ]}
                      disableGutter
                      align="left"
                      titleProps={{
                        variant: 'h6',
                        className: clsx(
                          classes.textWhite,
                          classes.fontWeightBold,
                        ),
                      }}
                      subtitleProps={{
                        variant: 'body2',
                        className: classes.textWhite,
                      }}
                    />
                  </CardBase>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      </Section>
      <Divider />
    </div>
  );
};

export default CompanyTerms;
