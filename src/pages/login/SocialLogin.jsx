import useAuth from '../../hooks/auth/useAuth';

const SocialLogin = () => {
    const { googleLogin,githubLogin } = useAuth();


    
    
    return (
        <>
      <div className="divider">continue with</div>
      <div className="flex justify-around">
        <button onClick={()=>{googleLogin()}}
        //   onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-primary btn-sm btn-outline"
        >
          Google
        </button>
        <button
        onClick={()=>{githubLogin()}}
        //   onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-secondary btn-sm btn-outline"
        >
          Github
        </button>
        <button
        //   onClick={() => handleSocialLogin(twitterLogin)}
          className="btn btn-accent btn-sm btn-outline"
        >
          Twitter
        </button>
        <button
        //   onClick={() => handleSocialLogin(facebookLogin)}
          className="btn btn-secondary btn-sm btn-outline"
        >
          Facebook
        </button>
      </div>
    </>
    );
};

export default SocialLogin;