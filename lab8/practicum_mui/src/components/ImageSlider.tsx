import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

interface ImageSliderProps {
  images: string[];
  visibleCount?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, visibleCount = 1 }) => {
  const [startIndex, setStartIndex] = useState(0);
  const maxStart = Math.max(images.length - visibleCount, 0);

  const handlePrev = () => setStartIndex(i => Math.max(i - 1, 0));
  const handleNext = () => setStartIndex(i => Math.min(i + 1, maxStart));

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <IconButton onClick={handlePrev} disabled={startIndex === 0} aria-label="Назад">
        <ArrowBackIos />
      </IconButton>
      <Box
        sx={{
          display: 'flex',
          overflow: 'hidden',
          width: `${visibleCount * 200}px`, // настройте под свою ширину
        }}
      >
        {visibleImages.map((src, idx) => (
          <Box
            key={idx}
            component="img"
            src={src}
            alt={`Slide ${startIndex + idx + 1}`}
            sx={{ width: `${100 / visibleCount}%`, objectFit: 'cover' }}
          />
        ))}
      </Box>
      <IconButton onClick={handleNext} disabled={startIndex >= maxStart} aria-label="Вперед">
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
