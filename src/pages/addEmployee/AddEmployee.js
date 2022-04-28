import { Container, Grid, Paper, Typography, TextField, Box, Button, IconButton, InputAdornment, } from '@mui/material'
import React from 'react'
import UseAddEmployee from "./UseAddEmployee";
import { DriveFileRenameOutline } from '@mui/icons-material';
import { FallingLines } from "react-loader-spinner";

export default function AddEmployee() {
  // Custom Hook
  const { focusHandlerName, focusHandlerLastName, focusHandlerEmail, textInputOne, textInputTwo, textInputThree, setFirstName, setLastName, setEmail, setPhoneNum, setdate, firstName, lastName, email, phoneNum, date, addEmployee, loading, buttonUp } = UseAddEmployee();
  
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
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Paper component={Box} mt={5} p={4}>
              <Typography variant='h4' textAlign={"center"}>
                Add Employees
              </Typography>
              <Box component="form" mt={2}>
                <TextField fullWidth value={firstName} onChange={(e) => { setFirstName(e.target.value) }} placeholder='Enter First Name' margin='normal' label="Enter First Name" inputRef={textInputOne} InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton onClick={focusHandlerName}>
                        <DriveFileRenameOutline />
                      </IconButton>
                    </InputAdornment>
                  )
                }} />
                <TextField fullWidth value={lastName} onChange={(e) => { setLastName(e.target.value) }} placeholder='Enter Last Name' margin='normal' label="Enter Last Name" inputRef={textInputTwo} InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton onClick={focusHandlerLastName}>
                        <DriveFileRenameOutline />
                      </IconButton>
                    </InputAdornment>
                  )
                }} />
                <TextField fullWidth value={email} onChange={(e) => { setEmail(e.target.value) }} type={"email"} placeholder='Enter E-mail' margin='normal' label="Enter E-mail" inputRef={textInputThree} InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton onClick={focusHandlerEmail}>
                        <DriveFileRenameOutline />
                      </IconButton>
                    </InputAdornment>
                  )
                }} />
              </Box>
              <Grid container justifyContent={"space-between"}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField fullWidth value={phoneNum} onChange={(e) => { setPhoneNum(e.target.value) }} type={"number"} placeholder='Enter Phone Number' margin='normal' label="Enter Phone Number" />
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                  <TextField fullWidth value={date} onChange={(e) => { setdate(e.target.value) }} type={"date"} margin='normal' />
                </Grid>
              </Grid>
              <Box mt={2}>
                {
                  buttonUp ?
                    <Button variant='contained' onClick={addEmployee}>
                      Add Employee
                    </Button> :
                    <Button variant='contained'>
                      Update
                    </Button>
                }
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
