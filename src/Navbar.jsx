import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ display:'flex',flexGrow: 1,justifyContent:'center' }}>
            Todo List App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
