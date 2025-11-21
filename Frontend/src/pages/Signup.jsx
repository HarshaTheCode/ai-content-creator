
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/button'
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {

  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const  navigator =useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();

    const data={
      "username":username,
      "email":email,
      "password":password
    }

const axioss=    await axios.post('/user/registration',data)
   console.log(data);
    navigator('/');
    
  };
  return (
   <div >
      <h2>Sign In</h2>

      <form onSubmit={handleSubmit}>
     <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="text-white border-2 border-white outline-0"
        />


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
      <Link to="/" className="text-white border-2 border-white outline-0 cursor-pointer"  >home</Link>
    </div>
  )
}

export default Signup
