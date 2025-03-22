import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
const Footer: React.FC = () => {
  return(

    <footer>
      <Container sx={{bgcolor: '#477259', padding: '0', bottom: '0', width: '100%'}}>
        <Typography variant="body1">
          My sticky footer can be found here.
        </Typography>
        <Typography variant="body2" color="textSecondary">
        {"Copyright © "}
        <Link color="inherit" href="https://sase-vt.org/">
        Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
