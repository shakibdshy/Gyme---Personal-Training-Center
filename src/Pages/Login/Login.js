import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../utils/firebase.init";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const navigateRegister = () => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  }

  return (
    <section className='login-section'>
      <Container>
        <Row>
          <Col>
            <div className='login-form'>
              <div className='form-text login-text'>
                Do You Have An Account?
                <span onClick={navigateRegister}>Sign Up</span>
              </div>
              <form onSubmit={handleLogin}>
                <div className='mb-3'>
                  <label htmlFor='exampleInputEmail1' className='form-label'>
                    Email address
                  </label>
                  <input
                    ref={emailRef}
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='exampleInputPassword1' className='form-label'>
                    Password
                  </label>
                  <input
                    ref={passwordRef}
                    type='password'
                    className='form-control'
                    id='exampleInputPassword1'
                    placeholder='Password'
                    required
                  />
                  <div className='form-text'>
                    <Link
                      to='/register'
                      onClick={resetPassword}>
                      Forget Password
                    </Link>
                  </div>
                </div>
                <button type='submit' className='btn btn-gr-red mt-4'>
                  Log in
                </button>
                <SocialLogin />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
