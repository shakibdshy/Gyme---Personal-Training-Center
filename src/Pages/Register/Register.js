import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Register = () => {
  return (
    <section className='login-section'>
      <Container>
        <Row>
          <Col>
            <div className='login-form'>
              <div className='form-text login-text'>
                Have An Account?
                <Link to='/login'>Sign In</Link>
              </div>
              <form>
                <div className='mb-3'>
                  <label htmlFor='registerFirstName' className='form-label'>
                    First Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='registerFirstName'
                    aria-describedby='emailHelp'
                    placeholder='First Name'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='registerEmail' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='registerEmail'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
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
                    type='password'
                    className='form-control'
                    id='registerPassword'
                    placeholder='Password'
                  />
                </div>
                <button type='submit' className='btn btn-gr-red'>
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
