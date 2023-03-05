import React, { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authTransactions';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const LazyLayout = lazy(() => import('../components/Layout/Layout'));
const LazyHomePage = lazy(() => import('../components/pages/HomePage'));
const LazyLoginPage = lazy(() => import('../components/pages/LoginPage'));
const LazyRegisterPage = lazy(() => import('../components/pages/RegisterPage'));
const LazyContactsPage = lazy(() => import('../components/pages/ContactsPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<LazyLayout />}>
          <Route index element={<LazyHomePage />} />
          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<LazyLoginPage />} />
            <Route path="/register" element={<LazyRegisterPage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<LazyContactsPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
