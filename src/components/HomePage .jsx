import React from "react";
import { Button } from "@mui/material";

const HomePage = (props) => {
  
  const Login = () => {
    props.history.push("/login");
  };

  const Registration = () => {
    props.history.push("/reg");
  };
       
    

  return (
   
      <div>
         <Button sx={{mr:'10px',ml:'10px'}} variant="contained" onClick={Login}>
                {" "}
                Login{" "}
              </Button>
              <Button sx={{mr:'10px',ml:'10px'}} variant="contained" onClick={Registration}>
                {" "}
                Registration{" "}
              </Button>
      </div>
  
  );
};

export default HomePage;