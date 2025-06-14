import React from 'react';
import { Container, Box } from '@mui/material';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavBar />
      <Container component="main" sx={{ flex: 1, py: 4 }}>
        <Gallery />
        <Box mt={4}>
          <h1>Пираты</h1>
          <p>Внешняя мотивация (экстринсивная) — мотивация, не связанная с содержанием определённой деятельности, но обусловленная внешними по отношению к субъекту обстоятельствами</p>
        </Box>
      </Container>
      <MainContent/>
      <Footer />
    </Box>
  );
}

export default App;