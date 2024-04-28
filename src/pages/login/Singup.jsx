
import  { useContext } from 'react';
import { AuthContext } from '../../provides/AuthProvider';

const Signup = () => {
 const {createUser}=useContext(AuthContext);


    const handleSignUp = e => {
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);

        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            // neew user created
            const createdAt=result.user?.metadata?.creationTime;
            const user={email,createdAt:createdAt}
            fetch('http://localhost:5000/user',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    alert('User addedet to the database')
                }
            })

        })
        .catch(error=>{
            console.error(error)
        })

      
    };

    return (
        <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup now!</h1>
          </div>
          <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="mt-6 form-control">
                <button className="btn btn-primary">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Signup;
