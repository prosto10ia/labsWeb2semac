import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

interface Item {
  img: string;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    img: `${process.env.PUBLIC_URL}/images/5.png`,
    title: 'Пираты',
    description:
      'Внешняя мотивация (экстринсивная) — мотивация, не связанная с внешними по отношению к субъекту обстоятельствами.'
  },
  {
    img: `${process.env.PUBLIC_URL}/images/6.png`,
    title: 'Соколы',
    description:
      'Внутренняя мотивация (интринсивная) — мотивация, возникающая из интереса к самому процессу или деятельности.'
  },
  {
    img: `${process.env.PUBLIC_URL}/images/7.png`,
    title: 'Драконы',
    description:
      'Амбивертная мотивация — сочетание внешних и внутренних факторов, когда оба вида по-разному влияют на поведение.'
  }
];

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
      <Card key={idx} sx={{ textAlign: 'center', p: 2 }}>
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
    ))}
  </Box>
);

export default MainContent;
