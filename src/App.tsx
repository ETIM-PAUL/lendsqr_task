import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import TopHeader from './components/TopHeader';
import { AuthContext } from './context/authContext';
import SignInPage from './pages/SignInPage';
import UserDetailsPage from './pages/UserDetailsPage';
import UsersListPage from './pages/UsersListPage';

function renderRoutes(role: string) {
  switch (role) {
    case "admin":
      return (
        <Routes>
          <Route path="/users" element={<UsersListPage />}></Route>
          <Route path="/users/:id" element={<UserDetailsPage />}></Route>
          {/* <Route
            path="*"
            exact element={<NotFoundPage />}
          ></Route> */}
        </Routes>
      );
    default:
      return (
        <Routes>
          <Route path="/login" element={<SignInPage />}></Route>
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
  const { state: { role, isAuthenticated } } = useContext(AuthContext);

  return (
    <div className="App">
      {isAuthenticated && role === "admin" ? <TopHeader /> : null}
      <div className="page-wrapper w-full h-full min-h-screen">
        {!localStorage.getItem("isAuthenticated")
          ? renderRoutes("none")
          : renderRoutes(role)}
      </div>
      {/* <SnackBar /> */}
    </div>
  );
}

export default App;
