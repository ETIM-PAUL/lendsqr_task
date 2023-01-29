import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import SideBar from './components/SideBar';
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
      <div className={`${isAuthenticated ? "grid-container" : "block"}`}>
        {isAuthenticated && role === "admin" ?
          <div className="top_header">
            <TopHeader />
          </div>
          : null}
        {isAuthenticated && role === "admin" ?
          <div className="sidebar">
            <SideBar />
          </div>
          : null}
        {!localStorage.getItem("isAuthenticated")
          ?
          <div className="content">
            renderRoutes("none")
          </div>
          : renderRoutes(role)}
      </div>
      {/* <SnackBar /> */}
    </div>
  );
}

export default App;
