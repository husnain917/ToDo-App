import { Container, Grid, Paper, Typography, TextField, IconButton, InputAdornment, Button, } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import UseSignUp from "./UseSignUp";
import { DriveFileRenameOutline } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FallingLines } from "react-loader-spinner";
export default function SignUp() {

    // Custom Hook
    const { textInputOne, textInputTwo, textInputThree, focusHandlerUserName, focusHandlerEmail, showPassword, handleClickShowPassword, handleMouseDownPassword, email, password, setEmail, setPassword, signUpHandler, userName, setUserName, loader } = UseSignUp();

    // loading
    if (loader) {
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
                    <Grid item xs={12} sm={12} md={8} lg={6}>
                        <Paper component={Box} mt={5} p={4}>
                            <Typography variant='h4' textAlign={"center"}>
                                Sign Up
                            </Typography>
                            <Box component="form" mt={2}>
                                <TextField fullWidth type={"text"} value={userName} onChange={(e) => { setUserName(e.target.value) }} placeholder='UserName' margin='normal' label="UserName" inputRef={textInputOne} InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <IconButton onClick={focusHandlerUserName}>
                                                <DriveFileRenameOutline />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }} />
                                <TextField fullWidth type={"email"} value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='E-mail' margin='normal' label="E-mail" inputRef={textInputTwo} InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <IconButton onClick={focusHandlerEmail}>
                                                <DriveFileRenameOutline />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }} />
                                <TextField fullWidth type={showPassword ? "text" : "password"} value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' inputRef={textInputThree} margin='normal' label="Password" InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }} />
                            </Box>
                            <Box mt={2}>
                                <Button variant='contained' color='primary' onClick={signUpHandler}>
                                    Sign Up
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
