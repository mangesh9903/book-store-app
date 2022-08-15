import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Grid, Container, Paper, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import UserService from '../services/UserService';
import Background from '../assets/jaredd-craig-HH4WBGNyltc-unsplash.jpg';
import book from "../assets/nong-v-u0ju284RN4M-unsplash.jpg";

const Registrartion = (props) => {

    var sectionStyle = {
        height: '100vh',
        marginTop: '0px',
        fontSize: '30px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${Background})`
    };

    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        kyc: "",
        dob: "",
        registeredDate: "",
        updatedDate: "",
        password: "",
        emailId: ""

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

    const register = (event) => {
        event.preventDefault();
        let registerData = {
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            kyc: userDetails.kyc,
            dob: userDetails.dob,
            registeredDate: userDetails.registeredDate,
            updatedDate: userDetails.updatedDate,
            password: userDetails.password,
            emailId: userDetails.emailId,

        };

        UserService.registerUser(registerData).then((response) => {
            console.log("Register User " + response)

            props.history.push("/login");

            alert("Register User Successfully...")

        }).catch((response) => {
            console.log(response);
            alert(response.response.data.data)
        });

    }

    const handlePassVisibility = () => {
        setPassetails({
            ...passDetails,
            showPass: !passDetails.showPass,
        });
    }

    const reset = () => {
        setUserDetails({
            ...userDetails,
            firstName: "",
            lastName: "",
            kyc: "",
            dob: "",
            registeredDate: "",
            updatedDate: "",
            password: "",
            emailId: ""
        });
    }

    return (
        <div style={sectionStyle}>

            <Container maxWidth="sm" >
                <Grid container spacing={2}
                    direction="column"
                    justifyContent="center"
                    style={{ minHeight: "100vh" }}
                >
                    <h3 style={{ color:'darkgoldenrod' }}>User Registration</h3>
                    <Paper elevation={2} sx={{ padding: 2 }} >
                        <form onSubmit={register} onReset={reset}>

                            <Grid container direction="column" spacing={0}>

                                <Grid item>
                                    <TextField type="text" fullWidth label="First Name" name='firstName'
                                        placeholder='Enter First Name' variant="outlined"
                                        required
                                        onChange={handleInput}
                                    />

                                </Grid>
                                <Grid item>
                                    <TextField type="text" fullWidth label="Last Name" name='lastName'
                                        placeholder='Enter lastName' variant="outlined"
                                        required
                                        onChange={handleInput}
                                    />

                                </Grid>
                                <Grid item>
                                    <TextField type="text" fullWidth label="kyc" name='kyc'
                                        placeholder='Enter kyc' variant="outlined"
                                        required
                                        onChange={handleInput}
                                    />

                                </Grid>
                                <Grid item>
                                    <TextField type="text" fullWidth label="DOB" name='dob'
                                        placeholder='dd mm yyyy' variant="outlined"
                                        required
                                        onChange={handleInput}
                                    />
                                </Grid>

                                <Grid item>
                                    <TextField type="text" fullWidth label="Registered Date" name='registeredDate'
                                        placeholder='dd mm yyyy' variant="outlined"
                                        required
                                        onChange={handleInput}
                                    />

                                </Grid>

                                <Grid item>
                                    <TextField type="text" fullWidth label="Updated Date" name='updatedDate'
                                        placeholder='dd mm yyyy' variant="outlined"
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
                                    <TextField type="email" fullWidth label="Email" name='emailId'
                                        placeholder='Enter Your Email Address' variant="outlined"
                                        required
                                        onChange={handleInput}
                                    />

                                </Grid>
                                <Grid item>
                                    <Button className="submit-button button addButton"
                                        variant="contained"
                                        color="success" padding variant="contained" type="submit">Register</Button>
                                    <Button style={{ margin: "10px" }} variant="contained" className="reset-button button resetButton"
                                        variant="contained"
                                        color="success" padding  type="reset">Reset</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
};

export default Registrartion;