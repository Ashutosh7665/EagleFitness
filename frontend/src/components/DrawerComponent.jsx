import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Cart from './Cart';

export default function DrawerComponent({ open, toggleDrawer }) {
  const DrawerList = (
    <Box 
      sx={{ 
        width: { xs: 320, sm: 400, md: 600, lg: 690 }, // Adjust width based on screen size
        p: 2 // Add padding for better spacing on small screens
      }} 
      role="presentation" 
      onClick={toggleDrawer(true)}
    >
      <Cart/>
    </Box>
  );

  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
    </Drawer>
  );
}
