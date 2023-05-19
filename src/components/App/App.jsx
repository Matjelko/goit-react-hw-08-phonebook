import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { refreshUser } from "redux/auth/operations";

import { HomePage } from "pages/HomePage";
import { RegisterPage } from "pages/RegisterPage";
import { LoginPage } from "pages/LoginPage";
import { ContactsPage } from "pages/ContactsPage";

import { Layout } from "components/Layout/Layout";
import { RestrictedRoute } from "components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute/PrivateRoute";
import CircularIndeterminate from "components/Loader/CircleLoader/CircleLoader";

import { useAuth } from "hooks/useAuth";

import '../../index.css';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return isRefreshing ? (
    <CircularIndeterminate/>
    ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route 
          path="register" 
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route 
          path="login" 
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route 
          path="/contacts" 
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  )
}

export default App;