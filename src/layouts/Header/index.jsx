import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Menu, 
  MenuItem, 
  IconButton,
  Switch,
  Button
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styles from './Header.module.css';

function Header() {
  const [downloadAnchorEl, setDownloadAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const downloadOpen = Boolean(downloadAnchorEl);

  const handleDownloadMenu = (event) => {
    setDownloadAnchorEl(event.currentTarget);
  };

  const handleDownloadClose = () => {
    setDownloadAnchorEl(null);
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Danish_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    handleDownloadClose();
  };

  return (
    <AppBar position="static">
      <Toolbar className={styles.header}>
        <div className={styles.rightSection}>
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
              onChange={handleThemeChange}
              className={styles.themeSwitch}
            />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
