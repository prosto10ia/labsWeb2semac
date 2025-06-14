import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { Link } from 'react-router-dom';

const pages = [
  { label: 'Дом', path: '/' },
  { label: 'План тренировок', path: '/table' },
  { label: 'Диаграмма', path: '/chart' }
];

const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Motivation innovation
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page.path}
              component={Link}
              to={page.path}
              color="inherit"
            >
              {page.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Button color="inherit" onClick={toggleDrawer(true)}>
            …
          </Button>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{ width: 240 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {pages.map((page) => (
                  <ListItem key={page.path} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={page.path}
                    >
                      <ListItemText primary={page.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
