import React from 'react';
import { Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
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
      sx={{
        width: isMobile ? 0 : 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
      }}
      open={!isMobile}
    >
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            component={NavLink}
            to={item.path}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideNav;