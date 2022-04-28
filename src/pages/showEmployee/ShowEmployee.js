import React from 'react'
import { Box, Paper, Container, IconButton, Table, TableCell, TableContainer, TableHead, TableRow, Typography, TableBody, Grid, } from '@mui/material';
import UseShowEmployee from "./UseShowEmployee";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { FallingLines } from "react-loader-spinner";
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { Link } from "react-router-dom";

export default function ShowEmployee() {

  // custom Hook
  const { loading, allData, deleteHandler, updateData } = UseShowEmployee();

  // loading
  if (loading) {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "73vh" }}>
          <FallingLines width="110" color="blue" />
        </div>
      </>
    )
  }
  return (
    <>
      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} sm={12} md={12} lg={12} mt={5}>
            <Paper component={Box}>
              <Typography variant='h4' py={3} textAlign={"center"}>
                Employees List
              </Typography>
              <TableContainer sx={{ height: 400 }}>
                <Table sx={{ height: "max-content" }}>
                  <TableHead>
                    <TableRow>
                      <TableCell align='center'>Sr.No.</TableCell>
                      <TableCell align='center'>First Name</TableCell>
                      <TableCell align='center'>Last Name</TableCell>
                      <TableCell align='center'>E-mail</TableCell>
                      <TableCell align='center'>Phone Number</TableCell>
                      <TableCell align='center'>Date of Birth</TableCell>
                      <TableCell colSpan={2} align='center'>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      allData.length > 0 ? (
                        allData.map((items, index) => {
                          // console.log(items, "Store Data");
                          return (
                            <TableRow>
                              <TableCell align='center'> {index + 1} </TableCell>
                              <TableCell align='center'> {items.data.firstName} </TableCell>
                              <TableCell align='center'> {items.data.lastName} </TableCell>
                              <TableCell align='center'> {items.data.email} </TableCell>
                              <TableCell align='center'> {items.data.phoneNum} </TableCell>
                              <TableCell align='center'> {items.data.date} </TableCell>
                              <TableCell align='right'>
                                <Link to = {"/"}>
                                  <IconButton onClick={() => { updateData(items) }} >
                                    <EditIcon color='primary' />
                                  </IconButton>
                                </Link>
                              </TableCell>
                              <TableCell align='left'>
                                <IconButton onClick={() => { deleteHandler(items.id) }}>
                                  <DeleteIcon color='error' />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          )
                        })
                      ) :
                        (
                          <>
                            <div style={{ color: "blue", textAlign: "center", }}>
                              <Typography variant='h5' mt={7}>
                                Data Not Found
                              </Typography>
                              <SearchOffIcon fontSize='large' style={{ margin: "20px 0px" }} />
                            </div>
                          </>
                        )
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
