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
import Search from './Components/Search';
// import ForgotPassword from './Components/ForgotPassword';
import AdminHeader from './Admin/Components/header';
import Sidenav from './Admin/Components/sidenav';
import BarberShop from './Admin/Components/BarberShop';
import Income from './Admin/Components/Income';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPageWithoutHeaderFooter />} />
        <Route path="/register" element={<RegisterPageWithoutHeaderFooter />} />
        <Route path="/" element={<DefaultLayout />} />
        <Route path="/Admin" element={<DefaultAdminLayout/>} />

      </Routes>
    </Router>
  );
}

function DefaultLayout() {
  return (
    <>
      <Header />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/ShopDetail" element={<ShopDetailPage />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/ShopAdmin" element={<ShopAdminPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/History" element={<HistoryPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function LoginPageWithoutHeaderFooter() {
  return (
    <LoginPage />
  );
}

function RegisterPageWithoutHeaderFooter() {
  return (
    <RegisterPage />


);
}
function DefaultAdminLayout(){
  return(
  <>

  <AdminHeader/>
  <Sidenav/>
    <Routes>
    <Route path="/Admin/BarberShop" element={<BarberShop />} />
     <Route path="/Income" element={<Income />} />

    </Routes>

</>
)
}

export default App;
