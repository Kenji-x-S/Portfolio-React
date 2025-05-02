import React, { useEffect } from 'react';
import { Typography, Box, Grid, Avatar, Button, IconButton, Fade } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Home');
  }, [setPageTitle]);

  return (
    <Box className={styles.container}>
      <Fade in timeout={1000}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4} className={styles.avatarContainer}>
            <Avatar
              alt="Danish Profile"
              src="/assets/cat_image.jpg"
              className={styles.avatar}
            />
          </Grid>
          <Grid item xs={12} md={8} className={styles.contentContainer}>
            <Fade in timeout={1500}>
              <Box>
                <Typography variant="h3" className={styles.heading}>
                  Welcome! I'm Danish
                </Typography>
                <Typography variant="body1" paragraph className={styles.description}>
                Hey there! I’m a Computer Science student passionate about building sleek, responsive web apps with HTML, CSS, JavaScript, and React. I’m currently working as a remote Sitecore developer at Extreme Networks, sharpening my skills in cutting-edge web development. This portfolio dives into my exciting journey and projects—delighted to have you here, so dive in, check out my education, and let’s connect!
                </Typography>
                <Button variant="contained" component={Link} to="/projects" className={styles.button}>
                  View Projects
                </Button>
                <Button variant="outlined" component={Link} to="/projects" className={styles.button}>
                  Contact Me
                </Button>
                <Box className={styles.socialContainer}>
                  <IconButton
                    href="https://github.com/Kenji-x-S"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    href="https://www.linkedin.com/in/danish-javed-dar-6951a934b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                  >
                    <LinkedIn />
                  </IconButton>
                </Box>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Fade>
    </Box>
  );
}

export default Home;