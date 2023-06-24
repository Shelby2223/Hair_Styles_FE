import React, { useState } from 'react';

function LoginPage() {
    const [isPasswordVisible, setPasswordVisible] = useState(false); // Trạng thái kiểm tra xem password đang hiển thị hay ẩn


    // Chuyển đổi trạng thái hiển thị password
    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible); // Đảo ngược trạng thái hiển thị password
    };

    // Lấy tên icon hiển thị password
    const getPasswordIcon = () => {
        return isPasswordVisible ? 'lock-open' : 'lock-closed'; // Trả về tên icon dựa trên trạng thái hiển thị password
    };

    const [user, setUser] = useState({
        user_email: '',
        user_password: '',
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handlelogin = async (e) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', user);
            console.log(response.data);
            console.log(response.data.message, 'message')
            // Display success message or redirect to another page
        } catch (error) {
            console.error(error, 'lỗi đầu');
            // Display error message
        }
    }




    return (
        <>
            <div className='container'>
                <div className="login-wrapper">
                    <span className="icon-close" onClick={() => window.location.href = '/'}>
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
                                        name="user_name"
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
                                        name="user_password"
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        required
                                        className="login-input"
                                        onChange={handleChange}

                                    />
                                    <label>Password</label>
                                </div>
                                <div className="login-remember-forgot">
                                    <a href="#">Forgot password</a>
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
