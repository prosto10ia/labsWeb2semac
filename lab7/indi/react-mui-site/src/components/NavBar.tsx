// src/components/NavBar.tsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem
} from '@mui/material';

const pages = ['Главная', 'План тренировок', 'Фото'];

const NavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Motivation inovation
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {pages.map((page) => (
            <Button key={page} color="inherit">
              {page}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Button color="inherit" onClick={handleOpen}>
            ...
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleClose}>
                {page}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
