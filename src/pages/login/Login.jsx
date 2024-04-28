import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";

const Login = () => {
    const { googleLogin,githubLogin } = useAuth();
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state ||'/';
  const { signInUser } =useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) =>{
    const {email,password}=data;
    signInUser(email,password)
    .then(result=>{
        if(result.user){
          navigate(from);
        }
      })
     }

   
  
    return (
      <>
      <div className="min-h-screen hero bg-base-200">
          <div className="flex-col hero-content lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Login now!</h1>
                  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              </div>
              <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Email</span>
                          </label>
                          <input type="text" placeholder="email" className="input input-bordered"
                          {...register("email", { required: true })}
                          />
                           {errors.email && <span className='text-red-500'>This field is required</span>}
                      </div>
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Password</span>
                          </label>
                          <input type="text" placeholder="password" className="input input-bordered"
                           {...register("password", { required: true })}
                          />
                          {errors.password && <span className='text-red-500'>This field is required</span>}
                          {/* <PasswordResetModal/> */}
                      </div>
                      <div className="p-0 mt-6 form-control">
                          <button className="btn btn-neutral">Login</button>
                      </div>
                      <label className="label">
                          New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                      </label>
                  </form>
                      {/* <SocialLogin /> */}
              </div>
          </div>
      </div>
  </>
    );
};

export default Login;