import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Search from './Components/Search';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ShopDetailPage/:shop_id" element={<ShopDetailPage />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/ShopAdmin" element={<ShopAdminPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/History" element={<HistoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;