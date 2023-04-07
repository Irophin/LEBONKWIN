import { ChangeEvent, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { User } from '../types/User';

const baseApiUrl = 'http://localhost:3000/api';

function LoginForm() {

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(`${baseApiUrl}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          localStorage.setItem('user', JSON.stringify(data.user));
          navigate('/');
        } else {
          alert(data.message);
        }
      }
    );
  }

  return (
    <form onSubmit={handleSubmit}>

      <h1>Login</h1>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter username"
          value={user.username}
          onChange={handlerModify}
          name='username'
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={user.password}
          onChange={handlerModify}
          name='password'

        />
      </div>

      <div className="form-group d-flex justify-content-between align-items-center m-3"> 
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <NavLink to="/register">Register</NavLink>
      </div>

    </form>
  );
}

export default LoginForm;
