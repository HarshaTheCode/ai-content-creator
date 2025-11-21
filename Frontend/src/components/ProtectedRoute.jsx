import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Authcontextdata } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuth} = useContext(Authcontextdata);



  if (!isAuth) {
    return <Navigate to="/signin" />;
  }

  
  return children;
};

export default ProtectedRoute;

