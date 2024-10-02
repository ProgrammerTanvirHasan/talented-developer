import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
       
      })
      .catch((error) => {
        
        console.log( error.message);
      });
  };

  const Links = (
    <>
      <NavLink
        to="/addBlog"
        className={({ isActive }) =>
          isActive ? "text-orange-200" : "text-white"
        }
      >
        AddBlog
      </NavLink>

      <NavLink
        to="/allBlog"
        className={({ isActive }) =>
          isActive ? "text-orange-200" : "text-white"
        }
      >
        AllBlog
      </NavLink>

      <NavLink
        to="featured"
        className={({ isActive }) =>
          isActive ? "text-orange-200" : "text-white"
        }
      >
        FeaturedBlog
      </NavLink>

      <NavLink
        to="/wish"
        className={({ isActive }) =>
          isActive ? "text-orange-200" : "text-white"
        }
      >
        WishList
      </NavLink>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-600 text-white font-bold">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown  z-10">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <button className="text-2xl">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-orange-200" : "text-white"
                  }
                >
                  Home
                </NavLink>
              </button>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-950 lg:hidden gap-4"
            >
              {Links}
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex gap-4">
          <ul className="menu menu-horizontal gap-4">{Links}</ul>
        </div>

        <div className="navbar-end">
          {
            user ? <>      
              
              <div className="avatar">
                <button onClick={handleLogOut} className="btn bg-red-500 text-white font-bold">LogOut</button>
  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2 ml-4">
    <img src={user.photoURL? user.photoURL:""} />
  </div>
</div>
              
          
          
          </> 
          :
          <>
         <div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <span className="text-sm text-red-400">!USER</span>
  </div>
</div>
          
          </>
          }
  </div>



      </div>

         <div className="flex justify-end mr-2">
         <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-orange-200" : "text-white"
                  }
                >
                  login
                </NavLink>
           </div>



         <div className="flex justify-end mr-2">
        <NavLink to="/register" className={({isActive})=> isActive ? "text-orange-200" : "text-white"}>  Register</NavLink>
         
         </div>
      
       
        </div>
   
    
  );
};

export default NavBar;
