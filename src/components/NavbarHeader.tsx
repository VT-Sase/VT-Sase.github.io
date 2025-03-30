import { AppBar, IconButton, Toolbar, Typography, Stack, Button } from "@mui/material";
import "/src/components/Navbar.css";
import Link from "@mui/material/Link";


const NavbarHeader: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: '#477259'}}>
      <Toolbar>
        <IconButton size = "medium" edge="start" color="inherit" aria-label="logo" href="/home">
          <img src="public/images/SASElogo.png" alt="logo" width="50" height="50"/>
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 2, textAlign: "left" }}>
          <Link href="/home" color="inherit" underline="none">
          VTSASE 
          </Link>
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" href="/about">About</Button>
          <Button color="inherit" href="/events">Events</Button>
          <Button color="inherit" href="/officers">Officers</Button>
          <Button color="inherit" href="/sponsors">Sponsors</Button>
          <Button color="inherit" href="/year-in-review">Year in Review</Button>
          <Button color="inherit" href="/alumni">Alumni</Button>
          </Stack>
      </Toolbar>
    </AppBar>
  )
};

export default NavbarHeader;
