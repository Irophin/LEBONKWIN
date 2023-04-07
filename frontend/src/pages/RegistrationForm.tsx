import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { User } from '../types/User';

const baseApi = 'http://localhost:3000/api';

function RegistrationForm() {
  const [user, setUsername] = useState<User>({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handlerModify = (event:ChangeEvent<HTMLInputElement>) => {

    console.log(user);
    
    setUsername((user) => {
      return {
        ...user,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(user);
    
    fetch(`${baseApi}/user`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((response) => {
      if (response.ok) {
        console.log('User created');
        response.json().then((data) => {
          localStorage.setItem('user', JSON.stringify(data)); // TEMPORARY SOLUTION TO STORE USER
          navigate('/');
        });
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>

      <h1>Register</h1>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          placeholder="Enter username"
          value={user?.username}
          onChange={handlerModify}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
          value={user?.password}
          onChange={handlerModify}
        />
      </div>

      <div className="form-group d-flex justify-content-between align-items-center m-3"> 
        <button type="submit" className="btn btn-primary">
            Submit
        </button>

        <NavLink to="/login">Login</NavLink>
      </div>

    </form>
  );
}

export default RegistrationForm;
