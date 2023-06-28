import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const userID = localStorage.getItem('userID');
        console.log(userID, 'id');

        if (userID) {
            axios.get('http://127.0.0.1:8000/api/users')
                .then((response) => {
                    const users = response.data;
                    const user = users.find((user) => user.user_id === parseInt(userID));

                    if (user) {
                        setUserName(user.user_name);
                    } else {
                        console.log('Không tìm thấy người dùng');
                    }
                })
                .catch((error) => {
                    console.log('Lỗi khi lấy danh sách người dùng:', error);
                });
        }
    }, []);


    console.log(userName, 'name');

    return (
        <>
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle" />
                        <div className="preloader-img pere-text">
                            <img src="assets/img/logo/loder.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <header>
                {/*? Header Start */}
                <div className="header-area header-transparent pt-20">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                {/* Logo */}
                                <div className="col-xl-2 col-lg-2 col-md-1">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="assets/img/logo/logo.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-md-10">
                                    <div className="menu-main d-flex align-items-center justify-content-end">
                                        {/* Main-menu */}
                                        <div className="main-menu f-right d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li className="active">
                                                        <a href="index.html">Home</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog.html">Blog</a>
                                                        <ul className="submenu">
                                                            <li>
                                                                <a href="blog.html">Blog</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog_details.html">Blog Details</a>
                                                            </li>
                                                            <li>
                                                                <a href="elements.html">Element</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">Contact</a>
                                                    </li>
                                                    {userName ? (
                                                        <>
                                                            <div className="header-right-btn f-right d-none d-lg-block ml-30">
                                                                <a href="from.html" className="btn header-btn">
                                                                    welcome: {userName}
                                                                </a>
                                                            </div>
                                                            <li>
                                                                <ion-icon name="calendar-clear-outline"></ion-icon>
                                                                <a href="contact.html">Calendar</a>
                                                            </li>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <li>
                                                                <a href="/Login">Đăng nhập</a>
                                                            </li>

                                                            <li>
                                                                <a href="/Register">Đăng Ký</a>
                                                            </li>
                                                        </>
                                                    )}

                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                {/* Mobile Menu */}
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </header>
        </>
    );
}

export default Header;
