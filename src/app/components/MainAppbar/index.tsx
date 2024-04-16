import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import binaryLogo  from '../../../assets/logo.svg';
import { Button, Typography } from '@mui/material';

export default function MainAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            //aria-label="menu"
          >
            <Box position={'relative'}>
            <img src={binaryLogo} alt="logo" height={"32"} />
            </Box>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit" size='large'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
