import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemText,
  useMediaQuery,
  Switch
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import sideNavStyles from '../SideNav/SideNav.module.css';
import { useTheme } from '../../context/ThemeContext';

function Header() {
  const [downloadAnchorEl, setDownloadAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const isMobile = useMediaQuery('(max-width:768px)');
  const downloadOpen = Boolean(downloadAnchorEl);

  const handleDownloadMenu = (event) => {
    setDownloadAnchorEl(event.currentTarget);
  };

  const handleDownloadClose = () => {
    setDownloadAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'public/assets/resume.pdf';
    link.download = 'Danish_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleDownloadClose();
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Education', path: '/education' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar className={styles.header}>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              className={styles.hamburger}
            >
              <MenuIcon />
            </IconButton>
          )}

          <div className={styles.rightSection}>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  onClick={handleDownloadMenu}
                  aria-controls={downloadOpen ? 'download-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={downloadOpen ? 'true' : undefined}
                >
                  <DownloadIcon />
                </IconButton>
                <Menu
                  id="download-menu"
                  anchorEl={downloadAnchorEl}
                  open={downloadOpen}
                  onClose={handleDownloadClose}
                >
                  <MenuItem onClick={downloadCV}>Download CV</MenuItem>
                </Menu>

                <IconButton onClick={toggleDarkMode} color="inherit">
                  {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
              </>
            ) : (
              <>
                <div className={styles.downloadContainer}>
                  <Button
                    className={styles.downloadButton}
                    aria-controls={downloadOpen ? 'download-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={downloadOpen ? 'true' : undefined}
                    onClick={handleDownloadMenu}
                    endIcon={<KeyboardArrowDownIcon />}
                    startIcon={<DownloadIcon />}
                    color="inherit"
                  >
                    Downloads
                  </Button>
                  <Menu
                    id="download-menu"
                    anchorEl={downloadAnchorEl}
                    open={downloadOpen}
                    onClose={handleDownloadClose}
                  >
                    <MenuItem onClick={downloadCV}>Download CV</MenuItem>
                  </Menu>
                </div>

                <div className={styles.themeToggle}>
                  {darkMode ? (
                    <DarkModeIcon className={styles.themeIcon} />
                  ) : (
                    <LightModeIcon className={styles.themeIcon} />
                  )}
                  <Switch
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    className={styles.themeSwitch}
                  />
                </div>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        classes={{ paper: sideNavStyles.drawerPaper }}
      >
        <List sx={{ width: 240 }}>
          {navItems.map((item) => (
            <NavLink
              key={item.text}
              to={item.path}
              onClick={handleDrawerToggle}
              className={({ isActive }) =>
                `${sideNavStyles.navItem} ${isActive ? sideNavStyles.active : ''}`
              }
            >
              <ListItemText primary={item.text} sx={{ padding: '1rem' }} />
            </NavLink>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
