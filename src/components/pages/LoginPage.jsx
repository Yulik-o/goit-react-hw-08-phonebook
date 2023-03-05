import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/auth/authTransactions';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userMap = {
    email: setEmail,
    password: setPassword,
  };
  const handleChange = e => {
    const { name, value } = e.target;
    userMap[name](value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      userLogin({
        email,
        password,
      })
    );

    e.target.reset();
  };

  return (
    <div>
      <h3>Please, log in</h3>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label label="Email">
          Email
          <input type="email" name="email" onChange={handleChange} />
        </label>

        <label label="Password">
          Password
          <input
            type="password"
            name="password"
            onChange={handleChange}
            minLength={7}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
