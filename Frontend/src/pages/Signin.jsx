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
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-xs">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 bg-black border border-white rounded-md focus:outline-none placeholder-gray-500"
            required
          />
 
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 bg-black border border-white rounded-md focus:outline-none placeholder-gray-500"
            required
          />
 
          <button
            type="submit"
            className="p-2 bg-white text-black font-bold rounded-md hover:bg-gray-300 transition-colors"
          >
            Sign In
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="font-bold hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
  
};


export default Signin;
