import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Swal from 'sweetalert2';
import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase.confiq";
const auth = getAuth(app);
const Register = () => {
  const [passError, setPassError] = useState('');
 

  const { createUser,setUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    
    e.preventDefault();
    const form = e.target;
    const name=form.name.value;
    const photoURL=form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 8) {
      setPassError('Password must be longer');
      return;
    } else if (!/[a-z]/.test(password)) {
      setPassError('At least one character must be a small letter');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPassError('At least one character must be a capital letter');
      return;
    } else if (!/[0-9]/.test(password)) {
      setPassError('At least one character must be a number');
      return;
    }

    setPassError('');

    createUser(email, password)
      .then(result => {
        const user = result.user;
             
       updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      })
       
       .then(()=>{
        setUser(user);
      console.log(user);
        Swal.fire({
          title: 'Success',
          text: 'User Created Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        });   
       })
       
       .catch(error => {
        console.log(error.message);
      });
         

        form.reset();
        navigate('/login');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div>
     
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <p className="py-6">
              <p>If Registration complete? Please <Link to={"/login"}><span className="font-bold text-orange-400">Log In now!</span></Link></p>
            </p>
          </div>
          <div className="card bg-gradient-to-r from-slate-500 to-slate-950 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered text-black"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" placeholder="image" name="photoURL" className="input input-bordered text-black"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered text-black" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered text-black" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-slate-400 text-lg to-slate-950 text-orange-300">Register</button>
              </div>
              {passError && <p className="text-amber-500">Sorry! {passError}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
