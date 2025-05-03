import React from 'react';
import { Drawer, List, ListItemText, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './SideNav.module.css';

function SideNav() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Education', path: '/education' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={!isMobile}
      sx={{
        width: isMobile ? 0 : 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
      classes={{ paper: styles.drawerPaper }}
    >
      <List>
        {navItems.map((item) => (
          <NavLink
            key={item.text}
            to={item.path}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
          >
            <ListItemText primary={item.text} />
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
}

export default SideNav;
