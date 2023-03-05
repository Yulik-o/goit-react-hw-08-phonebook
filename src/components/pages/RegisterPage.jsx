import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from 'redux/auth/authTransactions';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userMap = {
    name: setName,
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
      userRegister({
        name,
        email,
        password,
      })
    );
    e.target.reset();
  };
  return (
    <>
      <h3>Let's register in less than one minute! vi</h3>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label label="Name">
          Name
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label label="Email">
          Email
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label label="Password">
          Password
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit">Signup</button>
      </form>
    </>
  );
}
