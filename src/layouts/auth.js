import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styles from "./auth.module.scss";

const AuthLayout = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (window.location.pathname.startsWith("/auth/login")){
      setIsLogin(true)
    }
  }, []);

  const handleLogin = () => {
    if (isLogin) {
      setIsLogin(false);
      window.location.href = '/auth/register';
    } else {
      setIsLogin(true);
      window.location.href = '/auth/login';
    }  
  };


  return (
    <div className={styles.allPage}>
      <div className={styles.theForm}>
        <div className={styles[`${isLogin ? "test1" : "test1_2"}`]}>
          <Outlet />
          { isLogin ?
            <p>
              Vous n'avez pas de compte ? <Link className={styles.link} to="/auth/register" onClick={handleLogin}>Inscrivez-vous</Link>
            </p>:
            <p>
              Vous avez déja un compte ? <Link className={styles.link} to="/auth/login" onClick={handleLogin}>Connectez-vous</Link>
            </p>
          }
        </div>
        <div className={styles[`${isLogin ? "test2" : "test2_2"}`]}>
          <div className={styles.text_over}>
            <span className={styles.title}>Welcome to InstantTrip</span>
            <span className={styles.sous_title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
