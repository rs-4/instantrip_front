import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import styles from './index.module.scss';

const Index = () => {

    const [userForm, setUserForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone:"",
    });

    const handleChange = (e) => {
        setUserForm({
          ...userForm,
          [e.target.name]: e.target.value
        })
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:8001/api/auth/register', userForm)
        .then(response => {
          console.log(response.data);
          if(response.data.success == true) {
            window.location.href = '/';
          }
          //setResponseData(response.data);
          // Process the response from the API
        })
        .catch(error => {
          console.error(error);
        });
    }
    return (
        <div className={styles.all_register}>
            <h1>INSCRIPTION</h1>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div className={styles.first_inputs}>
                    <div>
                        <div className={styles.all_the_input}>
                            <label>Nom:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={userForm.lastName}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </div>
                        <div className={styles.all_the_input}>
                            <label>Prénom:</label>
                            <input
                                type="text"
                                name="firstName"
                                value={userForm.firstName}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <div className={styles.all_the_input}>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={userForm.email}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </div>
                        <div className={styles.all_the_input}>
                            <label>Mot de passe:</label>
                            <input
                                type="password"
                                name="password"
                                value={userForm.password}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.all_the_input}>
                    <label>Téléphone:</label>
                    <input
                        type="number"
                        name="phone"
                        value={userForm.phone}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
}

export default Index;
