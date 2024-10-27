import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

import "react-loading-skeleton/dist/skeleton.css";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center py-8 ">
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to="/login" />;
};

export default PrivateRoute;
