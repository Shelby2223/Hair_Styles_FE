import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegisterPage = () => {
    const [isModelVisible, setModelVisible] = useState(false);
    const [isRegisterVisible, setRegisterVisible] = useState(false);

    // đưa infor user vào mảng
    const [user, setUser] = useState({
        user_name: '',
        user_phone: '',
        user_address: '',
        user_email: '',
    });
    // thay đổi dữ liệu cập nhập lên mảng khi thay đổi
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    console.log(user, 'user');

    // otp_code: ''
    const [userData, setUserData] = useState({
        input_password: ''
    });


    useEffect(() => {
        setUserData({ ...userData, user_email: user.user_email });
    }, [user.user_email]);

    const handleChangeOTP = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
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
            console.error(error);
            // Display error message
        }
    };

    // back khi muốn thay đổi email
    const hanldeBack = () => {
        setRegisterVisible(false);
        setTimeout(() => {
            setModelVisible(false);
        }, 300);
        setUser({
            user_name: user.user_name,
            user_phone: user.user_phone,
            user_address: user.user_address,
            user_email: user.user_email,
        });
    };
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/verify-otp', userData);
            console.log(response.data);
            if (response.data.success === true) {
                // OTP xác minh thành công, hiển thị thông báo đăng ký thành công và chuyển hướng sang trang đăng nhập
                alert('Your account activation successful \nThank you!');
                const getUserResponse = await axios.get('http://127.0.0.1:8000/api/users');
                const users = getUserResponse.data;

                // Tìm người dùng dựa trên user_email nhập vào
                const foundUser = users.find((u) => u.user_email === userData.user_email); //u.user_email là từ api, user.user_email là từ input

                if (foundUser) {
                    const userID = foundUser.user_id;
                    localStorage.setItem('userID', userID);
                    console.log('userID đã lưu:', userID);
                    window.location.href = '/';
                } else {
                    console.log('Không tìm thấy người dùng');
                }
            }
        } catch (error) {
            console.error(error);
            // Xử lý lỗi nếu có
            alert('Đã xảy ra lỗi trong quá trình xác minh OTP. Vui lòng thử lại sau!');
        }
    };
    const hiddenHAF = () => {
        localStorage.setItem('setHeaderAndFooterHomePage', 1);
        window.location.href = '/';
    }
    const hiddenHAFComfirm = () => {
        localStorage.setItem('setHeaderAndFooterHomePage', 1);
    }


    console.log(userData, 'aaa');

    return (
        <>
            <div className='register_container'>
                <div className={`${isRegisterVisible ? 'register-wrapper2' : 'register-wrapper'}`}>
                    <span className="icon-close" onClick={hiddenHAF}>
                        <ion-icon name="close"></ion-icon>
                    </span>
                    <div className="register-form-image">
                        <div className='register-form-box'>
                            {!isModelVisible && (
                                <>
                                    <h2>Register</h2>

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
                                        <button type="submit" className="register-btnv">
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
                                    <h2>Sign in to activate your account</h2>
                                    <form onSubmit={handleVerifyOtp} className={`form-verify-email ${isRegisterVisible ? 'slide-in-right' : 'slide-out-left'}`}>
                                        <br></br>
                                        <p>We emailed you the six-digit password to {userData.user_email} <br />
                                            Enter the password below to confirm your email address.</p>
                                        <div className="register-input-box">
                                            <input
                                                type="number"
                                                required
                                                name="input_password"
                                                className="register-input"
                                                onChange={handleChangeOTP}
                                            />
                                            <label>Your password</label>
                                        </div>
                                        <div className='button-backandregister'>
                                            <button className="register-btnb" type="submit" onClick={hanldeBack}>Back</button>

                                            <button className="register-btnr" onClick={hiddenHAFComfirm} type='submit'>Confirm</button>
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




