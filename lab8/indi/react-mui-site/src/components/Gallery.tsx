import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

const images = [
  { src: `${process.env.PUBLIC_URL}/images/1.png`, title: 'Качай ноги', style: { maxWidth: '100%', height: '500px' } },
  { src: `${process.env.PUBLIC_URL}/images/2.png` , title: 'Качай ноги' },
  { src: `${process.env.PUBLIC_URL}/images/3.png`, title: 'Бам бам бокс' },
  { src: `${process.env.PUBLIC_URL}/images/4.png`, title: 'хоби хорс тема' },
];

const Gallery: React.FC = () => (
  <Box
    component="section"
    display="grid"
    gridTemplateColumns={{
      xs: '1fr',          
      sm: '1fr 1fr',     
      md: '1fr 1fr 1fr 1fr'
    }}
    gap={2}
  >
    {images.map((img, idx) => (
      <Card key={idx}>
        <CardMedia
          component="img"
          image={img.src}
          alt={img.title}
          sx={{
            width: 250,
            height: 300,       
            objectFit: 'cover' 
          }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {img.title}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </Box>
);

export default Gallery;
