import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styles from './ProjectCard.module.css';

function ProjectCard({ title, description }) {
  return (
    <Card className={styles.card} elevation={3}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;