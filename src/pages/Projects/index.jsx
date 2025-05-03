import React, { useEffect } from 'react';
import { Typography, Box, Grid, Fade, Card, CardActionArea, CardContent } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Projects.module.css';

function Projects() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Projects');
  }, [setPageTitle]);

  const projectContent = [
    { 
      title: 'Sminify', 
      description: 'A mini Spotify built on HTML, CSS, and JS.', 
      url: 'https://smfy.vercel.app/'
    },
    { 
      title: 'Ani-Track', 
      description: 'A Next.js application based on MAL for tracking and maintaining anime using watchlists.', 
      url: 'https://github.com/Kenji-x-S/Ani-Track'
    },
    { 
      title: 'Ani-Track For Android', 
      description: 'A Java-based Android application for replicating MAL.', 
      url: 'https://github.com/Kenji-x-S/Ani-Track-Phone-App'
    },
  ];

  return (
    <Box className={styles.container}>
      <Fade in timeout={1000}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" className={styles.heading}>
              My Projects
            </Typography>
            {projectContent.map((project, index) => (
              <Card key={index} className={styles.projectCard}>
                <CardActionArea component="a" href={project.url} target="_blank" rel="noopener noreferrer">
                  <CardContent>
                    <Typography variant="h6" className={styles.subheading}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" className={styles.details}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Fade>
    </Box>
  );
}

export default Projects;