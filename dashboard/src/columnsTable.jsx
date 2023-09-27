export const columnsUser = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 170,
    editable: true,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 110,
    editable: true,
  },
  
];

export const columnsProject = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "mainImg",
    headerName: "Image",
    width: 150,
    editable: true,
    renderCell: (params) => {
      return (
        <div className="mainImg">
          <img src={params.mainImg} alt="main-img" loading="lazy" />
        </div>
      );
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
    editable: true,
  },
  {
    field: "type",
    headerName: "Type",
    width: 150,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    width: 170,
    editable: true,
  },
];
