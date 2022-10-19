import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext/UserContext';

const PrivateRotutes = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    if(user && user.email){
        return children
    }
    return (
      <Navigate to="/register" state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRotutes;