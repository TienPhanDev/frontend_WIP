import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Button, TextField } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';

const Subscription = props => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <CardBase withShadow>
        <SectionHeader
          title="FOLLOW US"
          subtitle="Connect with us to get the latest news and updates"
          fadeUp
        />
        <Grid container spacing={1} alignItems="center" data-aos="fade-up">
          <Grid item xs={12} sm={9}>
            <TextField
              size="small"
              placeholder="e.g. YourEmailAccount@gmail.com"
              fullWidth
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size={isMd ? 'large' : 'medium'}
            >
              subscribe
            </Button>
          </Grid>
        </Grid>
      </CardBase>
    </div>
  );
};

Subscription.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Subscription;
