import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import items, { Item } from '../data/items';

const DynamicPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const idx = Number(id);
  const item: Item | undefined = items[idx];

  if (!item) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" color="error">
          Элемент не найден
        </Typography>
        <Button component={Link} to="/" sx={{ mt: 2 }}>
          ← Назад на главную
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Button component={Link} to="/" sx={{ mb: 2 }}>
        ← Назад
      </Button>
      <Card>
        <CardMedia
          component="img"
          src={item.img}
          alt={item.title}
          sx={{ maxHeight: 400, objectFit: 'contain' }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="body1">
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DynamicPage;
