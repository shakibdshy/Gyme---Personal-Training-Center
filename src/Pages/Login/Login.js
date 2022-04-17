import React, { useRef} from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);
  }

  const navigateRegister = () => {
    navigate('/register');
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
                  <div id='emailHelp' className='form-text'>
                    We'll never share your email with anyone else.
                  </div>
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
                    <Link to='/register'>Forget Password</Link>
                  </div>
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
