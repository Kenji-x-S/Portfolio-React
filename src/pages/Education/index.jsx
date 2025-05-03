import React, { useEffect } from 'react';
import { Typography, Box, Grid, Fade } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Education.module.css';

function Education() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Education');
  }, [setPageTitle]);

  const educationContent = [
    { title: 'Computer Science, [Information Technology University]', years: '2023 - Present', details: 'Learning C++, Python, Web-Development, Algorithms and more.' },
    { title: 'Sitecore Fundamentals, [Udemy]', years: '2023', details: 'Fundamentals of Front-End Design and Content Writing on Sitecore CMS.' },
  ];

  return (
    <Box className={styles.container}>
      <Fade in timeout={1000}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" className={styles.heading}>
              Courses and Certifications
            </Typography>
            {educationContent.map((item, index) => (
              <Box key={index} className={styles.contentItem}>
                <Typography variant="h6" className={styles.subheading}>
                  {item.title}
                </Typography>
                <Typography variant="body2" className={styles.details}>
                  {item.years} - {item.details}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Fade>
    </Box>
  );
}

export default Education;