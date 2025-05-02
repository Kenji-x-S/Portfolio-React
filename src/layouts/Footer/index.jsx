import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Footer.module.css';

function Footer() {
  return (
    <Box className={styles.footer}>
      <Typography variant="body2">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;