const Login = () => {
    const handleGoogleLogin = () => {
      // Handle Google login logic here
    };
  
    const handleFacebookLogin = () => {
      // Handle Facebook login logic here
    };
  
    return (
      <div>
        <h2>Login</h2>
        <GoogleLoginButton onClick={handleGoogleLogin} />
        <FacebookLoginButton onClick={handleFacebookLogin} />
      </div>
    );
  };
  
  export default Login;