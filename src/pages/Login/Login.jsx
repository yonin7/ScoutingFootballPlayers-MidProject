import { useState } from 'react';
import './login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <div className="tabsContainer">
            <label for="tab-1" className="tab" onClick={() => setIsLogin(true)}>
              Sign In
            </label>
            <label
              for="tab-2"
              className="tab"
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </label>
          </div>
          <form className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder="User name / Email"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">
                {isLogin ? 'Log In Now' : 'Sign Up Now'}
              </span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="social-login">
            <h3>log in via</h3>
            <div className="social-icons">
              <a href="#" className="social-login__icon fab fa-instagram"></a>
              <a href="#" className="social-login__icon fab fa-facebook"></a>
              <a href="#" className="social-login__icon fab fa-twitter"></a>
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
