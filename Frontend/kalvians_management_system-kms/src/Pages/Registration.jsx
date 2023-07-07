import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';


const Registration = () => {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const Navigate=useNavigate();

  const handleRegistration=async()=>{

   if(!name || !email || !password){
      alert("Please fill all your details");
      return;
   }

   if(!email.includes("@")){
         alert("Please enter the correct E-mail address");
         setEmail("")
         return;
   }

   if(password.length>15 || password.length<8){
      alert("Please enter the password between 8-15 characters");
      setPassword("");
      return;
}

   let data={
      name,
      email,
      password
   }

      try {

         let res = await fetch('http://localhost:3000/registration_data',{
         
         method:'POST',

         body: JSON.stringify(data), 
         
         headers:{        
            'Content-type': 'application/json' 
         }

         });

         let result=await res.json();

         setName("");
         setEmail("");
         setPassword("");

         alert("Congratulations, Registeration Successfull...!!!");
         
         Navigate("/login")

      } catch (error) {
         
         console.log(error);

         alert("Something went wrong");
      }
      

      
      
    
      


  }

  

  return (
    <Box sx={{background:"#FFF",minHeight:"100vh"}}>
    <Box component="form" borderRadius="17px" background="#FFFFFF" boxShadow="4px 4px 4px 4px rgb(0,0,0,0.25)" sx={{display:"flex",flexDirection:"column",width:"33%",margin:"auto",marginTop:"10vh"}} >
        <Typography variant="h5" color="#8CB082" m="auto" mt={5} mb={5} fontWeight="bold">REGISTRATION</Typography>
        <Typography variant="h6" pl="5%">Name</Typography>
        <TextField
           placeholder="Enter Your Name"
           variant="outlined"
           type="text"
           value={name}
           sx={{width:"90%",pl:"5%",mb:"5%"}}
           onChange={(e)=>setName(e.target.value)}
           >
        </TextField>
        <Typography variant="h6" pl="5%">Email</Typography>
        <TextField
           placeholder="Enter Your E-mail"
           variant="outlined"
           type="text"
           value={email}
           sx={{width:"90%",pl:"5%",mb:"5%"}}
           onChange={(e)=>setEmail(e.target.value)}
           >
        </TextField>
        <Typography variant="h6" pl="5%">Password</Typography>
        <TextField
           placeholder="Set Password"
           variant="outlined"
           type="text"
           value={password}
           sx={{width:"90%",pl:"5%",mb:"5%"}}
           onChange={(e)=>setPassword(e.target.value)}
           >
        </TextField>
        <Button onClick={handleRegistration} variant="contained" sx={{width:"25%",m:"auto",mb:"5%",fontSize:"20px",fontWeight:"bold",background:"#8CB082",color:"#FFF"}}>SIGN UP</Button>
    </Box>
    </Box>
  )
}

export default Registration;