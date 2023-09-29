export const columnsUser = [
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 150,
    sortable: false,
    editable: true,
    renderCell: (params) => 
     {
      return <img
        src={params.value}
        alt="main-img"
        loading="lazy"
        className="w-[50px] h-[50px] rounded-full"
      />}
    
    
  },

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
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "mainImg",
    headerName: "Image",
    width: 150,
    sortable: false,
    editable: true,
    renderCell: (params) => 
     {
      return <img
        src={params.value}
        alt="main-img"
        loading="lazy"
        className="w-[50px] h-[50px] rounded-full"
      />}
    
    
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
