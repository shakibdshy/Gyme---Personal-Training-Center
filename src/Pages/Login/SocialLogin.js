import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../utils/firebase.init";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGitHub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  let errorElement;

  if (error || error1 || error2) {
    errorElement = (
      <div>
        <p className='text-danger'>Error: {error.message}</p>
      </div>
    );
  }

  if (loading || loading1 || loading2) {
    return <p>Loading...</p>;
  }

  if (user || user1 || user2) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <div className='divider'>
        <hr />
        <span>OR</span>
        <hr />
      </div>
      {errorElement}
      <div className='social-login'>
        <Button
          onClick={() => {
            signInWithGoogle();
          }}
          to='/'
          className='google'>
          <FcGoogle />
        </Button>
        <Button onClick={() => {
            signInWithFacebook();
          }} to='/' className='fb'>
          <FaFacebook />
        </Button>
        <Button onClick={() => {
            signInWithGitHub();
          }} to='/' className='github'>
          <FaGithub />
        </Button>
      </div>
    </>
  );
};

export default SocialLogin;
