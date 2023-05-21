import { createContext, useState, useEffect } from "react";
import useFetch from "./../hooks/useFetch";
import Cookies from 'js-cookie';

const UserContext = createContext({
  isLogged: false,
  user: {}
});

export default UserContext;

export const UserContextProvider = ({ children }) => {
  
  const [user, setUser] = useState({});

  const [token, setToken] = useState()

  const [isLogged, setIsLogged] = useState(false);

  
  useEffect(() => {
    console.log(user, "userrrrrrrrrrrrrrrrrrr");
    console.log(isLogged)
  }, []);

  const login = (data) => {
    console.log(data, "dataaaaaaaaaaaaaaaaaaaaaaaaaa");
    setUser(data)
    setIsLogged(true)
  }

  const logout = () => {
    setIsLogged(false);
    setUser({});
    Cookies.remove('token_cookie')
    //router.push('/auth/login')
  }
  const context = {
    login, 
    logout, 
    user,
    isLogged,
  }

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  )


}