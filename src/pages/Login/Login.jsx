import { useState } from 'react';
import { auth, registerWithEmailAndPassword } from '../../firebase';
import './login.css';

const Login = ({ history }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoginError, setIsLoginError] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const handleSubmit = async (event) => {
    setIsLoginLoading(true);
    event.preventDefault();

    try {
      let userData;
      if (!!event.target.elements.register) {
        userData = await registerWithEmailAndPassword(
          event.target.elements.userName.value,
          event.target.elements.password.value
        );
      } else {
        userData = (
          await auth.signInWithEmailAndPassword(
            event.target.elements.userName.value,
            event.target.elements.password.value
          )
        ).user;
      }

      localStorage.setItem('token', userData.multiFactor.user.accessToken);
      history.push('/');
    } catch (e) {
      setIsLoginError(true);
    }

    setIsLoginLoading(false);
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <div className="tabsContainer">
            <label
              htmlFor="tab-1"
              className="tab"
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </label>
            <label
              htmlFor="tab-2"
              className="tab"
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </label>
          </div>
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                name="userName"
                placeholder="User name / Email"
                required
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            {isLoginError && (
              <span className="login__error">
                Error! Username or password are wrong.
              </span>
            )}
            <button
              className="button login__submit"
              name={isLogin ? 'login' : 'register'}
            >
              {isLoginLoading ? (
                'Loading...'
              ) : (
                <span className="button__text">
                  {isLogin ? 'Log In Now' : 'Sign Up Now'}
                </span>
              )}
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="social-login">
            <h3>log in via</h3>
            <div className="social-icons">
              {/* <a href="#" className="social-login__icon fab fa-instagram"></a>
              <a href="#" className="social-login__icon fab fa-facebook"></a>
              <a href="#" className="social-login__icon fab fa-twitter"></a> */}
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
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
