import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div>
                <div class="top-bar d-none d-md-block">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="top-bar-left">
                                    <div class="text">
                                        <h2>8:00 AM - 9:00 PM</h2>
                                        <p>Opening Mon - Sun</p>
                                    </div>
                                    <div class="text">
                                        <h2>(+84) 978 736 207</h2>
                                        <p>Call Us For help</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="top-bar-right">
                                    <div class="social">
                                        <a href=""><i class="fab fa-twitter"></i></a>
                                        <a href=""><i class="fab fa-facebook-f"></i></a>
                                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div class="container-fluid">
                        <a href="index.html" class="navbar-brand">Barber shops <span>5M</span></a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav ml-auto">
                                <input type="text" placeholder="Search" className="nav-item nav-link" />
                                <a href='showsop.html' class="nav-item nav-link"><i className="fas fa-search"></i></a>
            
                                <a href="index.html" class="nav-item nav-link active">Home</a>
                                <a href="service.html" class="nav-item nav-link">Service</a>
                                <a href="price.html" class="nav-item nav-link">Price</a>
                                <a href="team.html" class="nav-item nav-link">Barber</a>
                                <a href="portfolio.html" class="nav-item nav-link">Gallery</a>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                    <div class="dropdown-menu">
                                        <a href="blog.html" class="dropdown-item">Blog Page</a>
                                        <a href="single.html" class="dropdown-item">Single Page</a>
                                    </div>
                                </div>
                                <a class="nav-item nav-link" href="profile.html"><i class="fas fa-user" ></i> Profile</a>
                                <a href="contact.html" class="nav-item nav-link">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;