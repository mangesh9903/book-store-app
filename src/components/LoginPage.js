import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Grid, Container, Paper, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import UserService from '../services/UserService';
import Background from '../assets/jaredd-craig-HH4WBGNyltc-unsplash.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = (props) => {


    var sectionStyle = {
        height: '100vh',
        marginTop: '0px',
        fontSize: '30px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${Background})`
    };


    const [userDetails, setUserDetails] = useState({
        emailId: "",
        password: ""
    })


    const [passDetails, setPassetails] = useState({
        showPass: false
    })


    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserDetails({ ...userDetails, [name]: value });
        console.log(userDetails);
    };

    const forgetPassword = () => {
        props.history.push("/forgetPassword");

    }

    const login = (event) => {
        event.preventDefault();
        let loginData = {
            emailId: userDetails.emailId,
            password: userDetails.password
        };

        UserService.loginUser(loginData).then((response) => {
            console.log("Login " + response)


            toast.success("Logged In Successfully...");
             props.history.push("/dashboard");
            // alert("Logged In Successfully...")


        }).catch((response) => {
            console.log(response);
            toast.error(response.response.data.data);
            // alert(response.response.data.data)
        });

    }

    const handlePassVisibility = () => {
        setPassetails({
            ...passDetails,
            showPass: !passDetails.showPass,
        });
    }


    return (
        <div style={sectionStyle}>
            <ToastContainer
               position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            
            {/* Same as */}
          
            <Container maxWidth="sm" >
                <Grid container spacing={2}
                    direction="column"
                    justifyContent="center"
                    style={{ minHeight: "100vh" }}
                > 
                <h3 style={{ color: 'greenyellow' }}>User Login</h3>
                    <Paper elevation={2} sx={{ padding: 5 }} >
                        <form onSubmit={login}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <TextField type="email" fullWidth label="Email" name='emailId'
                                        placeholder='Enter Your Email Address' variant="outlined"
                                        required
                                        onChange={handleInput}
                                    />

                                </Grid>
                                <Grid item>
                                    <TextField type={passDetails.showPass ? "text" : "password"} fullWidth label="Password" name='password'
                                        placeholder='Enter Your Password' variant="outlined"
                                        onChange={handleInput}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position='end'>
                                                    <IconButton onClick={handlePassVisibility} aria-label="toggle password" edge="end">
                                                        {passDetails.showPass ? (
                                                            <VisibilityOffIcon />
                                                        ) : (
                                                            <VisibilityIcon />
                                                        )
                                                        }

                                                    </IconButton>
                                                </InputAdornment>
                                            )

                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button className="submit-button button addButton"
                                        variant="contained"
                                        color="success" padding variant="contained" type="submit">Login</Button>

                                </Grid>
                                <Grid item>
                                    {/* <Button style={{margin: "10px" , fontStyle: "5px"}} variant="contained" type="submit" onClick={forgetPassword}> forget</Button> */}
                                    <a href='/forgetPassword' style={{ fontSize: "20px" }} >forgetPassword</a>
                                </Grid>
                            </Grid>

                        </form>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
};

export default LoginPage;