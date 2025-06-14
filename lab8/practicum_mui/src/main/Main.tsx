import React from 'react';
import Navbar from '../components/Navbar';
import Gallery from './components/Gallery';
import Content from './components/Content';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';
import img4 from '../images/image4.jpg';

const Main: React.FC = () => {
  return (
    <div>
      <Navbar active="1" />
      <Gallery />
      <Content />

      <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
        <ImageSlider
          images={[img1, img2, img3, img4]}
          visibleCount={2}
        />
      </Box>

      <Footer />
    </div>
  );
};

export default Main;
