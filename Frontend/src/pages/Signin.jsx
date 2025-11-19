// taken help to write component 
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {PostDataContext} from "../context/PostData.jsx";


const Signin = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Postdata ,setPostData]= useContext(PostDataContext);
  const  navigator =useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await setPostData({
      'email':email,
      'password':password

    })
    console.log(Postdata);
     navigator('/contact');
    
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
    </div>
  );
};

export default Signin;
