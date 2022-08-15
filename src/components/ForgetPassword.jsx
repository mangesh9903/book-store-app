import React, { useState } from 'react';
import { Grid, Container, Paper, TextField, Button } from '@mui/material';
import UserService from '../services/UserService';
import Background from '../assets/jaredd-craig-HH4WBGNyltc-unsplash.jpg'

const ForgetPassword = (props) => {
    var sectionStyle = {
        height:'102vh',
            marginTop:'0px',
            fontSize:'30px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${Background})`
          };
        
    
        const [userDetails, setUserDetails] =useState({
            emailId:""
        })
    

    
    
        const handleInput = (event) =>{
            const name = event.target.name;
            const value  = event.target.value;
            setUserDetails({ ...userDetails, [name]: value});
            console.log(userDetails);
        };
    
        const forgetPassword = (event) => {
            event.preventDefault();
            let loginData = {
                emailId: userDetails.emailId
            };
    
            UserService.forgetPassword(loginData).then((response) => {
                console.log("Login "+response)
    
                    props.history.push("/login");
                
                alert("Logged In Successfully...")
              
            }).catch((response) =>  { 
                console.log(response);
                alert(response)
            });
            
        }
    
    
    
        return (
            <div style={sectionStyle}>
                <Container maxWidth="sm" >
                    <Grid container spacing={2}
                        direction="column"
                        justifyContent="center"
                        style={{ minHeight: "100vh" } } 
                    > <h3 style={{ color:'darkgoldenrod' }}>Forget Password</h3>
                        <Paper elevation={2} sx={{ padding: 5 }} >
                            <form onSubmit={forgetPassword}>
                            <Grid container direction="column" spacing={2}>
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
                                        color="success" padding variant="contained" type="submit">Verify</Button>
                                </Grid>
                            </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Container>
            </div>
        );
    };
    

export default ForgetPassword;