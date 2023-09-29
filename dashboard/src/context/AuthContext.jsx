import { createContext, useEffect, useReducer } from "react";

const INISIAL_STATE = {
  loading: false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  error: false,
};

export const UserContaxt = createContext(INISIAL_STATE);

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        user: null,
        error: false,
      };
    case "SUCCESS":
      return {
        loading: false,
        user: action.payload,
        error: false,
      };
    case "ERROR":
      return {
        loading: false,
        user: null,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
  }
  console.log(action.payload)
};

export const UserContaxtProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INISIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <UserContaxt.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContaxt.Provider>
  );
};
