import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Cart from './Cart';

export default function DrawerComponent({ open, toggleDrawer }) {
  const DrawerList = (
    <Box sx={{ width: 690 }} role="presentation" onClick={toggleDrawer(true)}>
      <Cart/>
    </Box>
  );

  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
    </Drawer>
  );
}
