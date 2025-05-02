import React, { useEffect } from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';

function Education() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Education');
  }, [setPageTitle]);

  return (
    <Box>
      <Typography variant="h4">Education</Typography>
      <Card sx={{ mt: 2, p: 2 }}>
        <CardContent>
          <Typography variant="h6">B.S. Computer Science</Typography>
          <Typography variant="body2">University Name, 2020-2024</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Education;