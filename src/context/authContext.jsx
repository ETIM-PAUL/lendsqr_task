import React, { createContext, useReducer } from "react";

// type AppType = {
//   globalMessage: string,
//   isAuthenticated: boolean,
//   role: string | null
// }

// interface Props {
//   children: React.ReactNode;
// }

export const AuthContext = createContext();

const initialState = {
  globalMessage: "",
  isAuthenticated: false,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SNACKBAR":
      return {
        ...state,
        globalMessage: action.payload.message,
      };
    case "LOGIN":
      localStorage.setItem("role", "admin");
      localStorage.setItem("isAuthenticated", action.payload);
      return {
        ...state,
        isAuthenticated: localStorage.getItem("isAuthenticated"),
        role: localStorage.getItem("role"),
      };
    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        role: null,
      };
    default:
      return state;
  }
};

export const showToast = (dispatch, message, timeout = 3000) => {
  dispatch({
    type: "SNACKBAR",
    payload: {
      message,
    },
  });

  setTimeout(() => {
    dispatch({
      type: "SNACKBAR",
      payload: {
        message: "",
      },
    });
  }, timeout);
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;