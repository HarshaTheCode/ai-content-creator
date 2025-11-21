// taken help to write component 
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import  { Authcontextdata } from "../context/AuthContext.jsx";

const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
const {isAuth,setIsAuth,loading,setLoading}=useContext(Authcontextdata)
const navigate = useNavigate();
const handleSubmit=(e)=>{

 
    
    e.preventDefault();
    
    const postData={
      'email':email,
      'password':password
      
    }
    const  UserFecting = async()=> {
      
      console.log("running");

      const data = await axios.post('/auth', postData)
      const authuser = data.data.auth;
      setIsAuth((Boolean(authuser)))
      
      console.log("authentication cheked ");
      console.log(postData);
      
      setLoading(false)
      
      if(authuser){
        navigate('/')
      }

    }
    
    
    
  
  UserFecting()
};

  return (
    <div >
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>

         

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-white border-2 border-white outline-0"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-white border-2 border-white outline-0"
         
        />

        <button
        
          type="submit"
          className="text-white border-2 border-white outline-0 cursor-pointer"
        >
          Sign In
        </button>
      </form>
      <Link to='/signup' className="text-white border-2 border-white outline-0 cursor-pointer"> sing up</Link>
    </div>
  );


  
};


export default Signin;
