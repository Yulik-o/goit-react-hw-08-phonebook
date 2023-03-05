import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOutRequest } from 'redux/auth/authTransactions';
import { selectToken, selectUserEmail } from 'redux/selectors';

export default function Layout() {
  const isLoggedIn = useSelector(selectToken);
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutRequest());
  };
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/contacts">Contacts</NavLink>
              <p>{userEmail}</p>
              <button onClick={handleLogOut}>Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login ">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
