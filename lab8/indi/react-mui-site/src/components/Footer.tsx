import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => (
  <Box component="footer" py={2} textAlign="center" bgcolor="grey.400">
    <Typography variant="body2" color="text.secondoty">
      Дaнюк К. К. Б9122-09.03.04
    </Typography>
  </Box>
);

export default Footer;