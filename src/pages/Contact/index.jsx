import React, { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Grid,
  Fade,
  TextField,
  Button,
  Slide
} from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Contact.module.css';

function Contact() {
  const { setPageTitle } = usePageTitle();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showSnackbar, setShowSnackbar] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');

  useEffect(() => {
    setPageTitle('Contact');
  }, [setPageTitle]);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate email on change
    if (name === 'email') {
      if (emailRegex.test(value)) {
        setEmailError(false);
        setEmailHelperText('');
      } else {
        setEmailError(true);
        setEmailHelperText('Please enter a valid email address.');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(formData.email)) {
      setEmailError(true);
      setEmailHelperText('Please enter a valid email address.');
      return;
    }

    setFormData({ name: '', email: '', message: '' });
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 2000);
  };

  return (
    <Box className={styles.container}>
      <Fade in timeout={1000}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" className={styles.heading}>
              Contact Me
            </Typography>
            <Box
              component="form"
              className={styles.formContainer}
              onSubmit={handleSubmit}
            >
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.input}
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                margin="normal"
                className={styles.input}
                error={emailError}
                helperText={emailHelperText}
              />
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                className={styles.input}
              />
              <Button type="submit" variant="contained" className={styles.button}>
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Fade>
      <Box className={styles.snackbarWrapper}>
        <Slide
          in={showSnackbar}
          direction="left"
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 300, exit: 300 }}
        >
          <Box className={styles.snackbarContent}>
            <Typography variant="body2" className={styles.snackbarText}>
              Form Submitted Successfully!
            </Typography>
          </Box>
        </Slide>
      </Box>
    </Box>
  );
}

export default Contact;
