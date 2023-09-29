import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Table from "../pages/table/Table";
import AddUpdateUser from "../pages/addUpdateUser/AddUpdateUser";
import { columnsProject, columnsUser } from "../columnsTable";
import AddUpdateProject from "../pages/addUpdateProject/AddUpdateProject";
import Login from "../pages/login/Login";
import { Fragment, useContext } from "react";
import { UserContaxt } from "../context/AuthContext";

const Routers = () => {
  const { user } = useContext(UserContaxt);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to={"/login"} />;
    }

    return children;
  };
  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Table title="users" columns={columnsUser} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Table title="projects" columns={columnsProject} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/add"
          element={
            <ProtectedRoute>
              <AddUpdateUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/update/:id"
          element={
            <ProtectedRoute>
              <AddUpdateUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects/add"
          element={
            <ProtectedRoute>
              <AddUpdateProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects/update/:id"
          element={
            <ProtectedRoute>
              <AddUpdateProject />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Fragment>
  );
};

export default Routers;
