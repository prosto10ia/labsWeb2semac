import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ImageSlider = ({ images, visibleCount }) => {
  const [startIndex, setStartIndex] = useState(0);

  const maxStart = Math.max(images.length - visibleCount, 0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxStart));
  };

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button onClick={handlePrev} disabled={startIndex === 0}>
        Назад
      </button>

      <div style={{
        display: 'flex',
        overflow: 'hidden',
        width: `${visibleCount * 200}px`, // ширина контейнера (например, 200px * visibleCount)
      }}>
        {visibleImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${startIndex + idx + 1}`}
            style={{
              width: `${100 / visibleCount}%`,
              objectFit: 'cover',
            }}
          />
        ))}
      </div>

      <button onClick={handleNext} disabled={startIndex >= maxStart}>
        Вперед
      </button>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  visibleCount: PropTypes.number,
};

ImageSlider.defaultProps = {
  visibleCount: 1,
};

export default ImageSlider;