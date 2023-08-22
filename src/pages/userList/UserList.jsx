import * as React from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { MdDelete } from "react-icons/md";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "UserName",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt=""></img>
            {params.row.UserName}
          </div>
        );
      },
    },
    { field: "email", headerName: "email", width: 200 },
    {
      field: "status",
      headerName: "status",
      type: "number",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      type: "number",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <MdDelete
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        PageSize={8}
        checkboxSelection
      />
    </div>
  );
}
