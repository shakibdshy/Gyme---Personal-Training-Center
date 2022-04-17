import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../utils/firebase.init";
import SocialLogin from "./SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);

  const [agree, setAgree] = useState(false);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if(email && password && name && agree){
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      toast.success("Successfully Registered");
      
    } else {
      toast.error("Please enter valid details");
    }

  };

  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    navigate("/home");
  }

  return (
    <section className='login-section'>
      <Container>
        <Row>
          <Col>
            <div className='login-form'>
              <div className='form-text login-text'>
                Have An Account?
                <span onClick={navigateLogin}>Sign In</span>
              </div>
              <form onSubmit={handleRegister}>
                <div className='mb-3'>
                  <label htmlFor='registerFirstName' className='form-label'>
                    First Name
                  </label>
                  <input
                    ref={nameRef}
                    type='text'
                    className='form-control'
                    id='registerFirstName'
                    aria-describedby='emailHelp'
                    placeholder='First Name'
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='registerEmail' className='form-label'>
                    Email address
                  </label>
                  <input
                    ref={emailRef}
                    type='email'
                    className='form-control'
                    id='registerEmail'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                    required
                  />
                  <div id='emailHelp1' className='form-text'>
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className='mb-3'>
                  <label htmlFor='registerPassword' className='form-label'>
                    Password
                  </label>
                  <input
                    ref={passwordRef}
                    type='password'
                    className='form-control'
                    id='registerPassword'
                    placeholder='Password'
                    required
                  />
                  <div id='passwordHelper' className='form-text'>
                    Please Use at least 6 characters
                  </div>
                </div>
                <div className='form-check mb-4'>
                  <input
                    onChange={() => setAgree(!agree)}
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                  />
                  <label
                    className={`form-check-label ${agree ? "text-danger" : ""}`}
                    htmlFor='flexCheckDefault'>
                    Accept Gyme Terms and Conditions
                  </label>
                </div>
                <button
                  disabled={!agree}
                  type='submit'
                  className='btn btn-gr-red mt-4'>
                  Sign Up
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

export default Register;
