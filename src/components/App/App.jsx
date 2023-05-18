import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";

import Filter from "../Filter/Filter";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";

import PropTypes from "prop-types";
import '../../index.css';
import { Routes, Route } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { LoginPage } from "pages/LoginPage";
import { RegisterPage } from "pages/RegisterPage";
import { ContactsPage } from "pages/ContactsPage";
import { Layout } from "components/Layout/Layout";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return isRefreshing ? (
    <b>Refreshing user...</b>
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
  // const dispatch = useDispatch()
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // return(
  //   <div className="container">
  //     <h1 className="header--phonebook">Phonebook</h1>
  //     <ContactForm/>
    
  //     <h2 className="header-contacts">Contacts</h2>
  //     <Filter/>
  //     {isLoading && !error 
  //       ? <h4>Request in progress...</h4>
  //       : <ContactList/>
  //     }
  //   </div>
  // )
}

App.propTypes = {
  loadContacts: PropTypes.func,
}

export default App;
