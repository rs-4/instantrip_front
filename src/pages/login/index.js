import React from 'react';
import axios from 'axios';
import styles from './index.module.scss';
import { useState, useEffect } from 'react';

const Index = () => {
    const [userForm, setUserForm] = useState({
        email: '',
        password: '',
      });
    
    const handleChange = (e) => {
        setUserForm({
          ...userForm,
          [e.target.name]: e.target.value,
        });
        console.log(userForm)
      };
    
    const handleSubmit = () => {
        axios
        .post('http://localhost:8001/api/auth/login', userForm)
        .then(response => {
          console.log(response);
          //setResponseData(response.data);
          // Process the response from the API
        })
        .catch(error => {
          console.error(error);
        });
    }
    
    return (
        <div className={styles.all_login}>
            <h1>CONNEXION</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        className={styles.email}
                        type="email"
                        name="email"
                        value={userForm.email}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <div>
                    <input
                        className={styles.password}
                        type="password"
                        name="password"
                        value={userForm.password}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}

export default Index;
