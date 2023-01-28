import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import TopHeader from './components/TopHeader';
import { AuthContext } from './context/authContext';
import SignInPage from './pages/SignInPage';
import UserDetailsPage from './pages/UserDetailsPage';
import UsersListPage from './pages/UsersListPage';

function renderRoutes(role) {
  switch (role) {
    case "admin":
      return (
        <Routes>
          <Route exact path="/users" element={<UsersListPage />}></Route>
          <Route exact path="/users/:id" element={<UserDetailsPage />}></Route>
          {/* <Route
            path="*"
            exact element={<NotFoundPage />}
          ></Route> */}
        </Routes>
      );
    default:
      return (
        <Routes>
          <Route exact path="/login" element={<SignInPage />}></Route>
          {/* <Route path="*" exact element={<NotFoundPage />}></Route> */}
          {/* <Route
            path="*"
            element={<NotFoundPage />}
          ></Route> */}
        </Routes>
      );
  }
}

function App() {
  const { state } = useContext(AuthContext);

  return (
    <div className="App">
      {state.isAuthenticated && state.role === "admin" ? <TopHeader /> : null}
      <div className="page-wrapper w-full h-full min-h-screen">
        {!localStorage.getItem("isAuthenticated")
          ? renderRoutes("none")
          : renderRoutes(localStorage.getItem("role"))}
      </div>
      {/* <SnackBar /> */}
    </div>
  );
}

export default App;
