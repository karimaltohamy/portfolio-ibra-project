import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import "./table.scss";
import { useEffect, useState } from "react";
import apiRequest from "../../utils/apiRequest";
import { toast } from "react-toastify";

const Table = ({ columns, title }) => {
  const [rows, setRows] = useState([]);

  const columnsActions = {
    field: "actions",
    headerName: "Actions",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellActions">
          <Link to={`/${title}/update/${params.id}`} className="btn btn_view">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </Link>
          <button
            className="btn btn_delete"
            onClick={() => deleteItem(params.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      );
    },
  };

  const handleGetRows = async () => {
    try {
      if (title === "users") {
        const { data } = await apiRequest.get("/users");
        setRows(data.users);
      } else if (title === "projects") {
        const { data } = await apiRequest.get("/projects");
        setRows(data.projects);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // delete item
  const deleteItem = async (id) => {
    try {
      if (title === "users") {
        await apiRequest.delete(`users/delete-user/${id}`);
        toast.success("delete user successfull");
      } else if (title === "projects") {
        await apiRequest.delete(`projects/delete-project/${id}`);
        toast.success("delete project successfull");
      }

      handleGetRows();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetRows();
  }, [title]);

  return (
    <div className="table_container section_dash">
      <div className="head">
        <h4 className="title_list">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          Add {title}
        </h4>
        <Link className="btn_add" to={`/${title}/add`}>
          Add New {title}
        </Link>
      </div>

      <DataGrid
        rows={rows ? rows : []}
        columns={[...columns, columnsActions]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pphoneNumberSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Table;
