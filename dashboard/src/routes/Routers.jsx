import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Table from "../pages/table/Table";
import AddUpdateUser from "../pages/addUpdateUser/AddUpdateUser";
import { columnsProject, columnsUser } from "../columnsTable";
import AddUpdateProject from "../pages/addUpdateProject/AddUpdateProject";
import Login from "../pages/login/Login";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Table title="users"  columns={columnsUser} />} />
        <Route path="/projects" element={<Table title="projects" columns={columnsProject} />} />
        <Route path="/users/add" element={<AddUpdateUser />} />
        <Route path="/users/update/:id" element={<AddUpdateUser />} />
        <Route path="/projects/add" element={<AddUpdateProject />} />
        <Route path="/projects/update/:id" element={<AddUpdateProject />} />
      </Routes>
    </div>
  )
}

export default Routers
