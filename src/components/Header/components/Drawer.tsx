import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon } from '@mui/material';
import { Box } from '@mui/system';

export default function DrawerComponent() {
  const [ShowModal, setShowModal] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        console.log('a');
        return;
      }

      setShowModal(open);
    };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      
    </Box>
  );

  return (
    <div>
      <button onClick={() => setShowModal(true)}>a</button>
      <Drawer anchor={'left'} open={ShowModal} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
