import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768, // Adjusted to match your media query
      lg: 1200,
      xl: 1536,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Ensures consistent baseline styles */}
    <App />
  </ThemeProvider>
);