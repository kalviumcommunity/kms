import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';


const Login = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const Navigate = useNavigate();

  const handleLogin = async() => {

   if( !email || !password ){
      alert("Please enter your details");
      return;
   }

   
   let res = await fetch('http://localhost:3000/registration_data',{
      
      method:'GET',
      
      headers:{        
         'Content-type': 'application/json' 
      }

      });

      let data=await res.json();

      console.log(data);

      let flag=false;

      data.forEach((e)=>{

        if(e.email==email && password==e.password){

             flag=!flag;

             return;
        }
        
      });

      if(flag){

        Navigate("/dashboard");

      }else{

        alert("Please, Register to Kalvian's Management System");

      }
  }

  

  return (
    <Box sx={{background:"#FFF",minHeight:"100vh"}}>
    <Box component="form" borderRadius="17px" background="#FFFFFF" boxShadow="4px 4px 4px 4px rgb(0,0,0,0.25)" sx={{display:"flex",flexDirection:"column",width:"33%",margin:"auto",marginTop:"10vh"}} >
        <Typography variant="h5" color="#8CB082" m="auto" mt={5} mb={5} fontWeight="bold">LOGIN</Typography>

        <Typography variant="h6" pl="5%">Email</Typography>
        <TextField
           placeholder="Enter Your E-mail"
           variant="outlined"
           type="text"
           sx={{width:"90%",pl:"5%",mb:"5%"}}
           onChange={(e)=>setEmail(e.target.value)}
           >
        </TextField>
        <Typography variant="h6" pl="5%">Password</Typography>
        <TextField
           placeholder="Set Password"
           variant="outlined"
           type="text"
           sx={{width:"90%",pl:"5%",mb:"5%"}}
           onChange={(e)=>setPassword(e.target.value)}
           >
        </TextField>
        <Button onClick={handleLogin} variant="contained" sx={{width:"25%",m:"auto",mb:"5%",fontSize:"20px",fontWeight:"bold",background:"#8CB082",color:"#FFF"}}>SIGN IN</Button>
    </Box>
    </Box>
  )
}

export default Login;