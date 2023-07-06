import React, { useState } from 'react';

const RegisterBarbershopForm = () => {
  const [shopName, setShopName] = useState('');
  const [shopImage, setShopImage] = useState('');
  const [shopPhone, setShopPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission or API request with the form data
    const formData = {
      shop_name: shopName,
      shop_image: shopImage,
      shop_phone: shopPhone,
      address,
      email,
      username,
    };

    // Example: Send the form data to the backend API
    fetch('http://example.com/api/register-barbershop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log(data);
        // Reset the form fields
        setShopName('');
        setShopImage('');
        setShopPhone('');
        setAddress('');
        setEmail('');
        setUsername('');
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle the error case
      });
  };

  return (
    <section style={{ padding:"10%" }}>
    <div className="register-form" style={{ width:"100%" }}>
      <h2>Become To Barbershop</h2>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="shopName">Shop Name:</label>
          <input
            type="text"
            id="shopName"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shopImage">Shop Image:</label>
          <input
            type="text"
            id="shopImage"
            value={shopImage}
            onChange={(e) => setShopImage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shopPhone">Shop Phone:</label>
          <input
            type="text"
            id="shopPhone"
            value={shopPhone}
            onChange={(e) => setShopPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    </section>
  );
};

export default RegisterBarbershopForm;
