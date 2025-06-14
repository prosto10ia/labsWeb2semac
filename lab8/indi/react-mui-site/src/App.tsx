import React from 'react';
import { Container, Box } from '@mui/material';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavBar />

      <Container component="main" sx={{ flex: 1, py: 4 }}>
        <Gallery />

        <Box mt={4}>
          <h1>Пираты</h1>
          <p>
            Внешняя мотивация (стринсивная) — мотивация, не связанная с содержанием
            определённой деятельности, но обусловленная внешними по отношению к субъекту обстоятельствами.
          </p>
        </Box>

        <MainContent />
      </Container>

      <Footer />
    </Box>
  );
}

export default App;
