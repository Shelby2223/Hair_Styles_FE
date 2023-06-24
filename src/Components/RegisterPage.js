import React, { useState,useEffect } from 'react';
import axios from 'axios';

const RegisterPage = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isModelVisible, setModelVisible] = useState(false);
    const [isRegisterVisible, setRegisterVisible] = useState(false);
    const [otpCode, setOtpCode] = useState(''); // Khởi tạo giá trị ban đầu của OTP là rỗng

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const getPasswordIcon = () => {
        return isPasswordVisible ? 'lock-open' : 'lock-closed';
    };

    const hanldeBack = () => {
        setRegisterVisible(false);
        setTimeout(() => {
            setModelVisible(false);
        }, 300);
    };


    // otp_code: ''

    const [user, setUser] = useState({
        user_name: '',
        user_phone: '',
        user_address: '',
        user_email: '',
        user_password: '',
    });


    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        setRegisterVisible(true);
        setTimeout(() => {
            setModelVisible(true);
        }, 300);
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', user);
            console.log(response.data);
            console.log(response.data.message, 'message')
            // Display success message or redirect to another page
        } catch (error) {
            console.error(error, 'lỗi đầu');
            // Display error message
        }
    };


    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/verify-otp', { otp_code: otpCode }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            if (response.data.success == true) {
                // OTP xác minh thành công, hiển thị thông báo đăng ký thành công và chuyển hướng sang trang đăng nhập
                alert('Đăng ký thành công!');
                // Chuyển hướng sang trang đăng nhập
                window.location.href = '/login';
            } else {
                // OTP xác minh không thành công, hiển thị thông báo lỗi
                alert('Mã OTP không chính xác. Vui lòng kiểm tra lại!');
            }
        } catch (error) {
            console.error(error);
            // Xử lý lỗi nếu có
            alert('Đã xảy ra lỗi trong quá trình xác minh OTP. Vui lòng thử lại sau!');
        }
    };




    return (
        <>
            <div className='container'>
                <div className={`${isRegisterVisible ? 'register-wrapper2' : 'register-wrapper'}`}>
                    <span className="icon-close" onClick={() => window.location.href = '/'}>
                        <ion-icon name="close"></ion-icon>
                    </span>
                    <div className="register-form-image">
                        <div className='register-form-box'>
                            <h2>Register</h2>
                            {!isModelVisible && (
                                <>
                                    <form onSubmit={handleRegister} className={`form-register ${isRegisterVisible ? 'slide-out-left' : 'slide-in-right'}`} >
                                        <div className="register-input-box">
                                            <span className="register-icon">
                                                <ion-icon name="person" />
                                            </span>
                                            <input
                                                type="text"
                                                required
                                                name="user_name"
                                                className="register-input"
                                                onChange={handleChange}
                                            />
                                            <label>Name</label>
                                        </div>
                                        <div className="register-input-box">
                                            <span className="register-icon">
                                                <ion-icon name="call" />
                                            </span>
                                            <input
                                                type="tel"
                                                required
                                                name="user_phone"
                                                className="register-input"
                                                onChange={handleChange}

                                            />
                                            <label>Phone</label>
                                        </div>
                                        <div className="register-input-box">
                                            <span className="register-icon">
                                                <ion-icon name="home" />
                                            </span>
                                            <input
                                                type="text"
                                                required
                                                name="user_address"
                                                className="register-input"
                                                onChange={handleChange}

                                            />
                                            <label>Address</label>
                                        </div>
                                        <div className="register-input-box">
                                            <span className="register-icon">
                                                <ion-icon name="mail" />
                                            </span>
                                            <input
                                                type="email"
                                                required
                                                name="user_email"
                                                className="register-input"
                                                onChange={handleChange}

                                            />
                                            <label>Email</label>
                                        </div>
                                        <div className="register-input-box">
                                            <span className="register-icon" onClick={togglePasswordVisibility}>
                                                <ion-icon name={getPasswordIcon()} />
                                            </span>
                                            <input
                                                type={isPasswordVisible ? 'text' : 'password'}
                                                required
                                                name="user_password"
                                                className="register-input"
                                                onChange={handleChange}

                                            />
                                            <label>Password</label>
                                        </div>
                                        <button type="submit" className="register-btnv" onClick={handleRegister}>
                                            Verify your email
                                        </button>
                                        <div className="register-login-register">
                                            <p>
                                                Do you have an account?
                                                <a href="/Login" className="register-register-link"> Login</a>
                                            </p>
                                        </div>
                                    </form>
                                </>
                            )}
                            {isModelVisible && (
                                <>
                                    <form onSubmit={handleVerifyOtp} className={`form-verify-email ${isRegisterVisible ? 'slide-in-right' : 'slide-out-left'}`}>
                                        <br></br>
                                        <h3>Verify your account</h3>
                                        <p>We emailed you the six-digit code to abc@gmail.com <br />
                                            Enter the code below to confirm your email address.</p>

                                        <div className="register-input-box">
                                            <input
                                                type="number"
                                                required
                                                name="otp_code"
                                                className="register-input"
                                                onChange={(e) => setOtpCode(e.target.value)}
                                            />
                                            <label>Your code</label>
                                        </div>
                                        <div className='button-backandregister'>
                                            <button className="register-btnb" type="submit" onClick={hanldeBack}>Back</button>

                                            <button className="register-btnr" type='submit'>Register</button>
                                        </div>
                                    </form>
                                </>
                            )}

                        </div>

                        <div className="register-image-box">
                            <img src="https://sahilkhurmi.files.wordpress.com/2013/05/barber.gif" alt="Image" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;


