import React from 'react';
import axios from 'axios';
import { useState } from 'react';

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
          console.log(response.data);
          //setResponseData(response.data);
          // Process the response from the API
        })
        .catch(error => {
          console.error(error);
        });
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userForm.email}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <div>
                    <label>Mot de passe:</label>
                    <input
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
