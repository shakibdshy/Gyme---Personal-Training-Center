import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../utils/firebase.init";
import SocialLogin from "./SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  if (error) {
    toast.error("Please enter valid details");
  }

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  const navigateRegister = () => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Password reset email sent successfully");
    } else {
      toast.error("Please enter email");
    }
  };

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
                    <span className='btn-link pointer' onClick={resetPassword}>
                      Forget Password
                    </span>
                  </div>
                </div>
                <p style={{ color: "red" }}>{error?.message}</p>
                <button
                  type='submit'
                  className='btn btn-gr-red mt-4'
                  disabled={isLoading}>
                  {isLoading ? (
                    <Spinner
                      as='span'
                      role='status'
                      aria-hidden='true'
                      animation='border'
                    />
                  ) : (
                    "Log in"
                  )}
                </button>
                <ToastContainer />
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
