import { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Singup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password is incorrect ');
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('e.message');
    }
    setLoading(false);
  };

  return (
    <div className="signupcontainer">
      <div className="signupcard">
        {error && <div className="errormessage">{error}</div>}
        <h2> Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <form className="Email">
            <labal>Email</labal>
            <input type="email" ref={emailRef} required />
          </form>
          <form className="password">
            <labal>Password</labal>
            <input type="password" ref={passwordRef} required></input>
          </form>
          <form className="password-confirm">
            <labal>Password Confirm</labal>
            <input type="password" ref={passwordConfirmRef} required></input>
          </form>
          <button disabled={loading} type="submit">
            Sign Up
          </button>
        </form>
      </div>

      <div className="loginLink">Already have an account? Log In</div>
    </div>
  );
};
export default Singup;
