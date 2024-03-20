import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { MenuContent } from 'src/components/SideMenu/MenuContent';
import { ButtonPosition, BoxSX, DrawerSX } from './styles';

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (position: boolean) => {
    return () => setIsOpen(position);
  };

  return (
    <ButtonPosition>
      <Button onClick={toggleDrawer(true)}>
        <SettingsIcon />
      </Button>
      <SwipeableDrawer
        sx={DrawerSX}
        anchor={'right'}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box sx={BoxSX} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <MenuContent />
        </Box>
      </SwipeableDrawer>
    </ButtonPosition>
  );
};
