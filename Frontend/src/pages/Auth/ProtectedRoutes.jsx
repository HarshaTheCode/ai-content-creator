import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes= ({children}) => {

  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true)

  const postData ={
  "email": "test@gmail.com",
  "password": "password"
};

  
  useEffect(() => {
    async function UserFecting() {
    console.log("running");
    
       const data = await axios.post('/auth',postData)
       const authuser =data.data.auth;
      setIsAuth((Boolean(authuser)))
      
    console.log("authentication cheked ");
 setLoading(false)
}
   UserFecting()
  }, [])
  
  
  
  if(loading){
    console.log(loading,"loading....!");
    
  return<>
    <p className='text-white'>loading...!</p>
    </>
   }

  if(!isAuth){
    console.log("not auth");
    
    return (
      <Navigate to="/signin"/>
    )
  }
  
  return (<>
     {children}
     </>)

}
export default ProtectedRoutes