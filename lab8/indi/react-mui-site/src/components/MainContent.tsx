import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import items from '../data/items';

const MainContent: React.FC = () => (
  <Box
    component="main"
    sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
      gap: 4,
      py: 4
    }}
  >
    {items.map((item, idx) => (
      <Link key={idx} to={`/item/${idx}`} style={{ textDecoration: 'none' }}>
        <Card sx={{ textAlign: 'center', p: 2, height: '100%' }}>
          <CardMedia
            component="img"
            src={item.img}
            alt={item.title}
            sx={{ width: '50%', height: 'auto', mx: 'auto', mb: 2 }}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    ))}
  </Box>
);

export default MainContent;
