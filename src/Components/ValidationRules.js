const ValidationRules = {
    user_name: [
      { required: true, message: 'Name is required' },
    ],
    user_phone: [
      { required: true, message: 'Phone number is required' },
      { pattern: /^\d{10}$/, message: 'Phone number must be 10 digits' },
    ],
    user_address: [
      { required: true, message: 'Address is required' },
    ],
    user_email: [
      { required: true, message: 'Email is required' },
      { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format' },
    ],
    user_password: [
      { required: true, message: 'Password is required' },
      { pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, message: 'At least 8 characters, including one uppercase letter and one digit' },
    ],
  };
  
  export default ValidationRules;
  