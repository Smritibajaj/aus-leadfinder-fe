/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function AustraliaDataGrid() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(20);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 20,
    page: 0,
  });
  useEffect(() => {
    fetchData();
  }, [paginationModel]);


  const fetchData = async () => {
    try {
      const response = await axios.get(
        `/api/entities?page=${paginationModel.page}&limit=${paginationModel.pageSize}`
      );
      const jsonData = response.data;
      setData(jsonData.data);
      setTotal(jsonData?.pagination.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const columns: any = [
    { field: "ABN", headerName: "ABN", width: 150, headerClassName: 'super-app-theme--header', },
    {
      field: "EntityTypeText",
      headerName: "Entity Type",
      width: 200,
      sortable: false,
    },
    {
      field: "GivenName",
      headerName: "Given Name",
      width: 150,
      sortable: true,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "FamilyName",
      headerName: "Family Name",
      width: 150,
      sortable: true,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "NonIndividualNameText",
      headerName: "Non-Individual Name",
      headerClassName: 'super-app-theme--header',
      width: 200,
    },
    {
      field: "created",
      headerName: "Created",
      headerClassName: 'super-app-theme--header',
      width: 200,
      valueGetter: (value: any, row: any) => {
        console.log(value);
        return `${dayjs(row.created).format("DD/MM/YYYY") ?? ""}`;
      },
    },
  ];

  return (
    <Container>
      <Box sx={{ width: "100%", py: 5 }}>
        <DataGrid
        sx={{
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 700
          },
        }}
          rows={data}
          paginationMode="server"
          getRowId={(row: any) => row?._id}
          columns={columns}
          paginationModel={paginationModel}
          rowCount={total}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 20, 50, 100]}
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
  );
}
