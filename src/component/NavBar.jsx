import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const Links = (
    <>
      <NavLink
        to="/addBlog"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 dark:text-orange-300"
            : "text-gray-900 dark:text-gray-300"
        }
      >
        AddBlog
      </NavLink>

      <NavLink
        to="/allBlog"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 dark:text-orange-300"
            : "text-gray-900 dark:text-gray-300"
        }
      >
        AllBlog
      </NavLink>

      <NavLink
        to="/featured"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 dark:text-orange-300"
            : "text-gray-900 dark:text-gray-300"
        }
      >
        FeaturedBlog
      </NavLink>

      <NavLink
        to="/wish"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 dark:text-orange-300"
            : "text-gray-900 dark:text-gray-300"
        }
      >
        WishList
      </NavLink>
    </>
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-bold">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <button className="text-2xl">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 dark:text-orange-300"
                      : "text-gray-900 dark:text-gray-200"
                  }
                >
                  Home
                </NavLink>
              </button>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-100 dark:bg-gray-900 lg:hidden gap-4"
            >
              {Links}
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex gap-4">
          <ul className="menu menu-horizontal gap-4">{Links}</ul>
        </div>

        <div className="navbar-end flex gap-4">
          <button
            onClick={toggleTheme}
            className="btn bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-800"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>

          {user ? (
            <>
              <div className="avatar">
                <button
                  onClick={handleLogOut}
                  className="btn bg-red-500 text-white font-bold"
                >
                  LogOut
                </button>
                <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2 ml-4">
                  <img src={user.photoURL ? user.photoURL : ""} alt="User" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <span className="text-sm text-red-400">!USER</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-end mr-2">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 dark:text-orange-300"
              : "text-gray-900 dark:text-gray-200"
          }
        >
          login
        </NavLink>
      </div>

      <div className="flex justify-end mr-2">
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 dark:text-orange-300"
              : "text-gray-900 dark:text-gray-200"
          }
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
