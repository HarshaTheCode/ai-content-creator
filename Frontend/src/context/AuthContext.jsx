
import { useEffect, useState, createContext } from 'react'



export const Authcontextdata=createContext();

const AuthContext = ({ children }) => {

 
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true)
  




  return (<Authcontextdata.Provider value={{isAuth,setIsAuth,loading,setLoading}} >
      {children}
    </Authcontextdata.Provider>
  )

}
export default AuthContext