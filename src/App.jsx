import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageTitleProvider } from './context/PageTitleContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './layouts/Header';
import SideNav from './layouts/SideNav';
import Footer from './layouts/Footer';
import { Box, CssBaseline } from '@mui/material';

const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <ThemeProvider>
      <PageTitleProvider>
        <Router>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <SideNav />
              <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </Suspense>
              </Box>
            </Box>
            <Footer />
          </Box>
        </Router>
      </PageTitleProvider>
    </ThemeProvider>
  );
}

export default App;
