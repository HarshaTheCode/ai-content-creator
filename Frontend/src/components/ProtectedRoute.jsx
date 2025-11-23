import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Authcontextdata } from '../context/AuthContext';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const { isAuth,setIsAuth,loading,setLoading} = useContext(Authcontextdata);


 const userserching=async()=>{


      const authuser= await axios.post('/auth/cookie')
      console.log(authuser.data.auth);
      const verified=authuser.data.auth;

      if (verified) {

        setIsAuth(true)
        
      }else{
        setLoading(false)
      }
      
      
    }
    if(loading){
      console.log('loading');
       userserching()
    }else if (!isAuth) {
     
      console.log('i am first ');
      
      return <Navigate to="/signin" />;
      
  }
  
  return children;
};

export default ProtectedRoute;

