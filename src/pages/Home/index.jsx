import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';

function Home() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Home');
  }, [setPageTitle]);

  return (
    <Box>
      <Typography variant="h4">Welcome to My Portfolio</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        This is the home page of my personal portfolio, showcasing my skills and projects.
      </Typography>
    </Box>
  );
}

export default Home;