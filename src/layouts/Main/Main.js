import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = ({ children, themeToggler, themeMode }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    pages: {
      title: 'Explore',
      id: 'supported-pages',
      children: {
        services: {
          groupTitle: 'Services',
          pages: [
            {
              title: 'Cloud IT Services',
              href: '/cloud-services',
            },
            {
              title: 'Remote Management',
              href: '/managed-soc',
            },
            {
              title: 'Security Operations',
              href: '/managed-soc',
            },
          ],
        },
        support: {
          groupTitle: 'Support',
          pages: [
            {
              title: 'Help Center',
              href: '/contact',
            },
            {
              title: 'Feedback',
              href: '/contact',
            },
            {
              title: 'Privacy Policy',
              href: '/privacy-policy',
            },
          ],
        },
        about: {
          groupTitle: 'About',
          pages: [
            {
              title: 'Background',
              href: '/404',
            },
            {
              title: 'Contact Us',
              href: '/contact',
            },
            {
              title: 'Who We Are',
              href: '/contact',
            },
          ],
        },
      },
    }
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} themeMode={themeMode} themeToggler={themeToggler} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Divider />
        {children}
      </main>
      <Footer pages={pages} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;
