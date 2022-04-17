import React, { useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../utils/firebase.init";

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(name, email, password);

    createUserWithEmailAndPassword(email, password);
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
                </div>
                <button type='submit' className='btn btn-gr-red mt-4'>
                  Sign Up
                </button>
                <div className='divider'>
                  <hr />
                  <span>OR</span>
                  <hr />
                </div>
                <div className='social-login'>
                  <Button to='/' className='google'>
                    <FcGoogle />
                  </Button>
                  <Button to='/' className='fb'>
                    <FaFacebook />
                  </Button>
                  <Button to='/' className='github'>
                    <FaGithub />
                  </Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
