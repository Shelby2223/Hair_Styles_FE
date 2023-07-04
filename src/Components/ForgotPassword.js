import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
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

    // otp_code: ''

    const [user, setUser] = useState({
        input_email: '',
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const [usercomfirm, setUsercomfirm] = useState({
        input_password: '',
    });

    const handleChangepassword = (e) => {
        setUsercomfirm({ ...usercomfirm, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setUsercomfirm({ ...usercomfirm, input_email: user.input_email });
    }, [user.input_email]);

    console.log(usercomfirm);


    const handleRegister = async (e) => {
        setRegisterVisible(true);
        setTimeout(() => {
            setModelVisible(true);
        }, 300);
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/forgot_password', user);
            console.log(response.data);
            console.log(response.data.message, 'message')
            // Display success message or redirect to another page
        } catch (error) {
            console.error(error, 'lỗi đầu');
            // Display error message
        }
    };

    // back khi muốn thay đổi email
    const hanldeBack = () => {
        setRegisterVisible(false);
        setTimeout(() => {
            setModelVisible(false);
        }, 300);
    };

    const hanldeBackLogin = () => {
        window.location.href = '/login'
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/verify_new_password', usercomfirm)
            console.log(response.data);
            if (response.data.success == true) {
                const userID = response.data.id_user;
                localStorage.setItem('userID', userID);
                localStorage.setItem('setHeaderAndFooterHomePage', 1);
                localStorage.setItem('setHeaderAndFooterAdmin', 0);
                // OTP xác minh thành công, hiển thị thông báo đăng ký thành công và chuyển hướng sang trang đăng nhập
                alert('Reset password successfully \nPlease change your password');
                // Chuyển hướng sang trang đăng nhập
                window.location.href = '/changeyourpassword';
            } else {
                // OTP xác minh không thành công, hiển thị thông báo lỗi
                alert('Incorrect password \nPlease re-enter password again');
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
                <div className='register-wrapper2'>
                    <span className="icon-close" onClick={() => window.location.href = '/'}>
                        <ion-icon name="close"></ion-icon>
                    </span>
                    <div className="register-form-image">
                        <div className='register-form-box'>
                            {!isModelVisible && (
                                <>
                                    <h2>Forgot Password</h2>
                                    <form onSubmit={handleRegister} className={`form-register ${isRegisterVisible ? 'slide-out-left' : 'slide-in-right'}`} >
                                        <br></br>
                                        <div className="register-input-box">
                                            <span className="register-icon">
                                                <ion-icon name="mail" />
                                            </span>
                                            <input
                                                type="email"
                                                required
                                                name="input_email"
                                                className="register-input"
                                                onChange={handleChange}

                                            />
                                            <label>Your Email</label>
                                        </div>
                                        <div className='button-backandregister'>
                                            <button className="register-btnb" type="submit" onClick={hanldeBackLogin}>Back</button>

                                            <button className="register-btnr" type='submit'>Get new password</button>
                                        </div>
                                    </form>
                                </>
                            )}
                            {isModelVisible && (
                                <>
                                    <h2>Sign in to activate your account</h2>
                                    <form onSubmit={handleVerifyOtp} className={`form-verify-email ${isRegisterVisible ? 'slide-in-right' : 'slide-out-left'}`}>
                                        <br></br>
                                        <p>We emailed you the six-digit password to {usercomfirm.input_email} <br />
                                            Enter the password below to confirm your email address.</p>

                                        <div className="register-input-box">
                                            <input
                                                type="number"
                                                required
                                                name="input_password"
                                                className="register-input"
                                                onChange={handleChangepassword}
                                            />
                                            <label>Your code</label>
                                        </div>
                                        <div className='button-backandregister'>
                                            <button className="register-btnb" type="submit" onClick={hanldeBack}>Back</button>

                                            <button className="register-btnr" type='submit'>Reset passsword</button>
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

export default ForgotPassword;


