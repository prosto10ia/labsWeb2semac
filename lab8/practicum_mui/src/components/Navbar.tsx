import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import {Link} from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
}));

interface ComponentProps {
    active: string;
}

function Navbar({ active }: ComponentProps) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    // Функция для определения варианта кнопки
    const getButtonVariant = (index: string) => {
        return active === index ? "contained" : "text";
    };

    return (
        <AppBar      
            position="static"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                mt: '28px',
            }}
        >
            <Container maxWidth="xl">
                <StyledToolbar>
                    <Typography variant="h6" sx={{ color: '#5d8aa8' }}>
                        Самые высокие здания и сооружения
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Link to="/">
                            <Button 
                                variant={getButtonVariant("1")} 
                                color="info" 
                                size="medium"
                            >
                                Главная
                            </Button>
                        </Link>

                        <Link to="/list">
                            <Button 
                                variant={getButtonVariant("2")} 
                                color="info" 
                                size="medium"
                            >
                                Список зданий
                            </Button>
                        </Link>

                        <Link to="/chart">
                            <Button 
                                variant={getButtonVariant("3")} 
                                color="info" 
                                size="medium"
                            >
                                Диаграммы
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }}}>    
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>              
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                        >
                            <Box>               
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                <Link to="/" style={{ textDecoration: 'none', color: 'black'}}>
                                    <MenuItem 
                                        sx={{ 
                                            bgcolor: active === "1" ? 'action.selected' : 'inherit',
                                            '&:hover': active !== "1" ? { bgcolor: 'action.hover' } : { bgcolor: 'action.selected' }
                                        }}
                                    >
                                        Главная
                                    </MenuItem>
                                </Link>

                                <Link to="/list" style={{ textDecoration: 'none', color: 'black' }}>
                                    <MenuItem 
                                        sx={{ 
                                            bgcolor: active === "2" ? 'action.selected' : 'inherit',
                                            '&:hover': active !== "2" ? { bgcolor: 'action.hover' } : { bgcolor: 'action.selected' }
                                        }}
                                    >
                                        Список зданий
                                    </MenuItem>
                                </Link>

                                <Link to="/chart" style={{ textDecoration: 'none', color: 'black' }}>
                                <MenuItem 
                                    sx={{ 
                                        bgcolor: active === "3" ? 'action.selected' : 'inherit',
                                            '&:hover': active !== "3" ? { bgcolor: 'action.hover' } : { bgcolor: 'action.selected' }
                                    }}
                                >
                                    Диаграммы
                                </MenuItem>  
                                </Link>
                            </Box>
                        </Drawer>      
                    </Box>
                </StyledToolbar>
            </Container>   
        </AppBar>
    );
}

export default Navbar;