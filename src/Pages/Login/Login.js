import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <section className='login-section'>
      <Container>
        <Row>
          <Col>
            <div className='login-form'>
                <div className='form-text login-text'>
                    Do You Have An Account? 
                    <Link to='/register'>Sign Up</Link>
                </div>
              <form>
                <div className='mb-3'>
                  <label htmlFor='exampleInputEmail1' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                  />
                  <div id='emailHelp' className='form-text'>
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className='mb-3'>
                  <label htmlFor='exampleInputPassword1' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='exampleInputPassword1'
                    placeholder='Password'
                  />
                </div>
                <button type='submit' className='btn btn-gr-red mt-4'>
                  Log in
                </button>
                <div className="divider">
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

export default Login;
