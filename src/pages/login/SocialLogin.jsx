import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/auth/useAuth';

const SocialLogin = () => {
    const { googleLogin,githubLogin } = useAuth();
    const navigate=useNavigate();
    const location=useLocation();
    const from=location?.state ||'/';

    const handleSocialLogin=(SocialProvider)=>{
      SocialProvider()
      .then(result=>{
        if(result.user){
          navigate(from);
        }
      })
    }
    return (
        <>
      <div className="divider">continue with</div>
      <div className="flex flex-col justify-around gap-4">
        <button onClick={()=>{handleSocialLogin(googleLogin)}}
        //   onClick={() => handleSocialLogin(googleLogin)}
          className="bg-purple-500 btn btn-primary btn-sm btn-outline"
        >
          Google
        </button>
        <button
        onClick={()=>{handleSocialLogin(githubLogin)}}
        //   onClick={() => handleSocialLogin(githubLogin)}
          className="bg-sky-400 btn btn-secondary btn-sm btn-outline"
        >
          Github
        </button>
        {/* <button
        //   onClick={() => handleSocialLogin(twitterLogin)}
          className="btn btn-accent btn-sm btn-outline"
        >
          Twitter
        </button> */}
        {/* <button
        //   onClick={() => handleSocialLogin(facebookLogin)}
          className="btn btn-secondary btn-sm btn-outline"
        >
          Facebook
        </button> */}
      </div>
    </>
    );
};

export default SocialLogin;