import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
    const [isPasswordVisible, setPasswordVisible] = useState(false); // Trạng thái kiểm tra xem password đang hiển thị hay ẩn
    const [admin, setadmin] = useState('')

    // Chuyển đổi trạng thái hiển thị password
    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible); // Đảo ngược trạng thái hiển thị password
    };

    // Lấy tên icon hiển thị password
    const getPasswordIcon = () => {
        return isPasswordVisible ? 'lock-open' : 'lock-closed'; // Trả về tên icon dựa trên trạng thái hiển thị password
    };

    const [user, setUser] = useState({
        input_email: '',
        input_password: '',
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    console.log('user', user);
    const handlelogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', user);
            console.log(response.data);
            if (response.data.user === true) {
                const userID = response.data.id_user;
                localStorage.setItem('userID', userID);
                localStorage.setItem('setHeaderAndFooterHomePage', 1);
                localStorage.setItem('setHeaderAndFooterAdmin', 0);
                console.log('userID đã lưu:', userID);
                alert('Login Successful \nWelcome to BarberShop! ');
                window.location.href = '/';
            } else if (response.data.admin === true) {
                const userID = response.data.id_user;
                localStorage.setItem('userID', userID);
                localStorage.setItem('is_admin', 1);
                localStorage.setItem('setHeaderAndFooterHomePage', 0);
                localStorage.setItem('setHeaderAndFooterAdmin', 1);
                alert('Login Successful \nWelcome my boss! ');
                window.location.href = '/BarberShop';
            } else if (response.data.user === false ) {
                alert('Đăng nhập thất bại');
                console.log(response.data.abc);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const hiddenHAF = () => {
        localStorage.setItem('setHeaderAndFooterHomePage', 1);
        window.location.href = '/';
    }

    return (
        <>
            <div className='container'>
                <div className="login-wrapper">
                    <span className="icon-close" onClick={hiddenHAF}>
                        <ion-icon name="close"></ion-icon>
                    </span>
                    <div className="login-form-image">
                        <div className="login-form-box">
                            <h2 className="login-heading">Login</h2>
                            <form onSubmit={handlelogin}>
                                <div className="login-input-box">
                                    <span className="login-icon">
                                        <ion-icon name="mail" />
                                    </span>
                                    <input
                                        name="input_email"
                                        type="email"
                                        required
                                        className="login-input"
                                        onChange={handleChange}
                                    />
                                    <label>Email</label>
                                </div>
                                <div className="login-input-box">
                                    <span className="login-icon" onClick={togglePasswordVisibility}>
                                        <ion-icon name={getPasswordIcon()} />
                                    </span>
                                    <input
                                        name="input_password"
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        required
                                        className="login-input"
                                        onChange={handleChange}

                                    />
                                    <label>Password</label>
                                </div>
                                <div className="login-remember-forgot">
                                    <a href="/ForgotPassword">Forgot password</a>
                                </div>
                                <button type="submit" className="login-btn">Login</button>
                                <div className="login-login-register">
                                    <p>
                                        Don't have an account?
                                        <a href="/Register" className="login-register-link"> Register</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                        <div className="login-image-box">
                            <img
                                src="https://sahilkhurmi.files.wordpress.com/2013/05/barber.gif"
                                alt="Image"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default LoginPage;
