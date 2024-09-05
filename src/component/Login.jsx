

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import {  GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

const Login = () => {
  const {signUser,googleSign,setUser,githubSign}=useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  

const handleSign=(e)=>{
   e.preventDefault();
   const form=e.target;
  
   const email=form.email.value;
   const password=form.password.value;
 

signUser(email,password)
.then(result=>{
  const user=result.user;

  Swal.fire({
    title: 'Success',
    text: 'User SignIn Successfully',
    icon: 'success',
    confirmButtonText: 'Cool'
  });



 setUser(user)
  form.reset()
 
  
})  
.catch(error=>{
  console.log(error.message);
})

}

const handleGoogle=()=>{
  googleSign(googleProvider)
  .then(result=>{
    const googleUser=result.user;
    setUser(googleUser)
   
  })
  .catch(error=>{
    console.log(error.message);
  })
}

const handleGithub=()=>{
  githubSign(githubProvider)
  .then(result=>{
    const gitUser=result.user;
    setUser(gitUser)
    
  })
  .catch(error=>{
    console.log(error.message);
  })
}







    return (
        <div >
          <div >
          <img className="flex absolute min-w-full min-h-screen" src="https://i.ibb.co/B3Np0WX/cyber-security-concept-626203-897.jpg" alt="" />

          <div className=" relative " >
            <div className="hero  min-h-screen  ">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            
            <p className=" text-white">
             if not registered? first registration please! <Link to={"/register"}><span  className="font-bold text-orange-400 
               ">Register</span></Link>
            </p>
          </div>
          <div className="card bg-gradient-to-r from-slate-500 to-slate-950 w-full max-w-sm shrink-0 shadow-2xl">

            <form onSubmit={handleSign} className="card-body">

              

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered"  />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-slate-400 text-lg to-slate-950 text-orange-300 ">Login</button>
              </div>
             <div className="flex justify-around">
                
              <button onClick={handleGoogle} className="text-orange-300">GOOGLE LOGIN</button>
                     <button onClick={handleGithub} className="text-orange-300">GITHUB LOGIN</button>
             </div>
                <button className="text-orange-300">FACEBOOK LOGIN</button>
            </form>
          </div>
        </div>
      </div>
              </div>
          </div>
               
        </div>
     
    );
};

export default Login;