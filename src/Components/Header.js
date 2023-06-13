import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
    const [userName, setUserName] = useState('');


    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            axios
                .get(`https://6471cfab6a9370d5a41ab469.mockapi.io/users/${userId}`)
                .then((response) => {
                    const user = response.data;
                    setUserName(user.name);
                })
                .catch((error) => {
                    console.log('Lỗi khi lấy thông tin người dùng:', error);
                });
        }
    }, []);

    return (
        <div>
            <div className="top-bar d-none d-md-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="top-bar-left">
                                <div className="text">
                                    <h2>8:00 AM - 9:00 PM</h2>
                                    <p>Opening Mon - Sun</p>
                                </div>
                                <div className="text">
                                    <h2>(+84) 978 736 207</h2>
                                    <p>Call Us For help</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="top-bar-right">
                                <div className="social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a href="index.html" className="navbar-brand">Barber shops <span>5M</span></a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <input type="text" placeholder="Search" className="nav-item nav-link" />
                            <a href='showsop.html' className="nav-item nav-link"><i className="fas fa-search"></i></a>

                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="service.html" className="nav-item nav-link">Service</a>
                            <a href="price.html" className="nav-item nav-link">Price</a>
                            <a href="team.html" className="nav-item nav-link">Barber</a>
                            <a href="portfolio.html" className="nav-item nav-link">Gallery</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu">
                                    <a href="blog.html" className="dropdown-item">Blog Page</a>
                                    <a href="single.html" className="dropdown-item">Single Page</a>
                                </div>
                            </div>
                            {userName ? (
                                <>
                                    <a className="nav-item nav-link" href="profile.html"><i className="fas fa-user" ></i>Xin chào: {userName}</a>
                                </>
                            ) : (
                                <>
                                    <a href="#" className="nav-item nav-link">Đăng nhập</a>
                                    <a href="#" className="nav-item nav-link">Đăng Ký</a>
                                </>
                            )}
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
