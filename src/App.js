import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import ShopDetailPage from './Components/ShopDetailPage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import ProfilePage from './Components/ProfilePage';
import ShopAdminPage from './Components/ShopAdminPage';
import ContactPage from './Components/ContactPage';
import HistoryPage from './Components/HistoryPage';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/:id" element={<ShopDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/profile" element={<ProfilePage />} />
        <Route path="/shop/admin" element={<ShopAdminPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking/history" element={<HistoryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
