/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridPaginationModel } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function AustraliaDataGrid() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    total: 10,
    perPage: 10,
    currentPage: 0,
    totalPages: 0,
  });
  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = async (page) => {
    try {
      const response = await axios.get(`/api/entities?page=${page}`);
      const jsonData = response.data;
      setData(jsonData.data);
      setPagination(jsonData.pagination);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (newPaginationModel: GridPaginationModel) => {
    fetchData(newPaginationModel.page);
  };

  const columns: any = [
    { field: "ABN", headerName: "ABN", width: 150 },
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
    },
    {
      field: "FamilyName",
      headerName: "Family Name",
      width: 150,
      sortable: true,
    },
    {
      field: "NonIndividualNameText",
      headerName: "Non-Individual Name",
      width: 200,
    },
    {
      field: "created",
      headerName: "Created",
      width: 200,
      valueGetter: (value, row) =>
        `${dayjs(row.created).format("DD/MM/YYYY") ?? ""}`,
    },
  ];

  return (
    <Container>
      <Box sx={{ width: "100%", py: 5 }}>
        <DataGrid
          rows={data}
          getRowId={(row) => row._id}
          columns={columns}
          initialState={{
            pagination: {
              rowCount: pagination.total,
              paginationModel: {
                pageSize: pagination.perPage,
                page: pagination.currentPage,
              },
            },
          }}
          rowCount={pagination.total}
          onPaginationModelChange={handlePageChange}
          pageSizeOptions={[pagination.perPage]}
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
  );
}
