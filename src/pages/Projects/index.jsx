import React, { useEffect } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import ProjectCard from '../../components/ProjectCard';
import { usePageTitle } from '../../context/PageTitleContext';

function Projects() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Projects');
  }, [setPageTitle]);

  const projects = [
    { title: 'Project 1', description: '1 idk.' },
    { title: 'Project 2', description: '2 idk' },
  ];

  return (
    <Box>
      <Typography variant="h4">Projects</Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <ProjectCard title={project.title} description={project.description} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;