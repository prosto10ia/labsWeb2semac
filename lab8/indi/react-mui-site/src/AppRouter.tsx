import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import MainContent from './components/MainContent';
import TablePage from './pages/TablePage';
import Chart from './chart/Chart';
import DynamicPage from './pages/DynamicPage';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={
        <>
          <Gallery />
          <MainContent />
        </>
      } />
      <Route path="/table" element={<TablePage />} />
      <Route path="/chart" element={<Chart />} />
      <Route path="/item/:id" element={<DynamicPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;