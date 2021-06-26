import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    '& .hero-shaped': {
      borderBottom: 0,
    },
    '& .hero-shaped__wrapper': {
      [theme.breakpoints.up('md')]: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
      },
    },
  },
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
      margin: `0 auto`,
    },
  },
  image: {
    objectFit: "contain",
  },
  label: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  underline: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline #93d266'
    },
  },
}));

const NotFoundCover = () => {
  const router = useRouter();
  const classes = useStyles();

  const handleClick = () => {
    router.back();
  };

  return (
    <div className={classes.root}>
      <HeroShaped
        leftSide={
          <div className={classes.formContainer}>
            <SectionHeader
              label="404 error"
              title="Oops! There’s nothing here.."
              subtitle={
                <span>
                  If you feel this is an error please{' '}
                  <LearnMoreLink
                    title="Let us know"
                    href="/contact"
                    typographyProps={{ variant: 'h6' }}
                    className={classes.underline}
                  />
                </span>
              }
              titleProps={{
                variant: 'h4',
              }}
              subtitletitleProps={{
                variant: 'h6',
              }}
              labelProps={{
                color: 'secondary',
                className: classes.label,
                variant: 'h5',
              }}
              ctaGroup={[
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  Go Back
                </Button>,
              ]}
              disableGutter
            />
          </div>
        }
        rightSide={
          <Image
            src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            className={classes.image}
            lazy={false}
          />
        }
      />
    </div>
  );
};

export default NotFoundCover;
