import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`,
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
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

const ServerError = () => {
  const classes = useStyles();

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            label="500 Internal Server Error"
            title="Oops! There’s nothing here..."
            subtitle={
              <span>
                If you feel this is an error please{' '}
                <LearnMoreLink
                  title="let us know"
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
      </Section>
    </div>
  );
};

export default ServerError;
