import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext/UserContext';

const PrivateRotutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
      return (
        <>
          <div className="mt-20">
            <div class="flex items-center justify-center ">
              <div class="w-40 h-40 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
          </div>
        </>
      );
    }
    if(user && user.email){
        return children
    }
    return (
      <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRotutes;