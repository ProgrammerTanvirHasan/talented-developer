



import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    
    if (loading) {
        return (
            <div>
                <Skeleton height={30} width={`80%`} />
                <Skeleton count={3} height={20} />
                <Skeleton height={200} />
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname} to='/login' />;
};

export default PrivateRoute;
