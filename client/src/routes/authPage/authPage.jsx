import { useState } from "react";
import "./authPage.css";

const AuthPage = () => {
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false); // isRegister: false = Login, true = Register

  return (
    <div className="authPage">
      <div className="authContainer">
        <img src="/general/logo.png" alt="Logo" /> {/* */}
        <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>

        {isRegister ? (
          // FORM ĐĂNG KÝ (REGISTER)
          <form key="register">
            <div className="formGroup">
              <label htmlFor="username">UserName</label>
              <input
                type="text" // Nên dùng type="text" cho username
                placeholder="Enter your username"
                name="username"
                id="username"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="displayName">DisplayName</label>
              <input
                type="text" // Nên dùng type="text" cho displayName
                placeholder="Enter your displayName"
                name="displayName"
                id="displayName"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                id="password"
                required
              />
            </div>

            {/* Nút submit cho form đăng ký */}
            <button type="submit">Register</button>
            <p onClick={() => setIsRegister(false)}>
              <span>Already have an account? <b>Login</b></span>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          // FORM ĐĂNG NHẬP (LOGIN)
          <form key='loginForm'>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                id="password"
                required
              />
            </div>
            <button type="submit">Login</button>
            <p onClick={() => setIsRegister(true)}>
              Don&apos;t have an account? <b>Register</b> 
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;