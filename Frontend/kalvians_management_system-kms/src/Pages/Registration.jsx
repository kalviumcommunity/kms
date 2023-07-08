import { Box, Button, TextField, Typography, Snackbar, Alert } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';


const Registration = () => {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [severity, setSeverity] = useState("success");


  const Navigate=useNavigate();

  let base_url=`${process.env.REACT_APP_BASE_URL}`

  const handleRegistration = async()=>{

   if(!name || !email || !password){

      setMsg("Please fill all your details");

      setOpen(true);

      setSeverity("warning");

      return;

   }

   if(!email.includes("@")){

         setMsg("Please enter the correct E-mail address");

         setEmail("");

         setOpen(true);

         setSeverity("warning");

         return;

   }

   if(password.length>15 || password.length<8){

      setMsg("Please enter the password between 8-15 characters");

      setPassword("");

      setOpen(true);

      setSeverity("warning");

      return;

   }

      let data={
         name,
         email,
         password
      }

      try {

         let res = await fetch(`${base_url}/registration_data`,{
         
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

         setMsg("Congratulations, Registeration Successfull...!!!");

         setSeverity("success");

         setOpen(true);

         setTimeout(()=>{

            Navigate("/login");

         },2000)
         
         

      } catch (error) {
         
         console.log(error);

         setMsg("Something went wrong");

         setSeverity("error");

         setOpen(true);

      }

  }

  

  return (
   <React.Fragment>
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

    <Snackbar open={open} sx={{mt:["15%","12%","5%"],fontWeight:"bold"}} anchorOrigin={{ vertical:"top", horizontal:"center" }} autoHideDuration={2000} onClose={() => setOpen(false)}>
   <Alert sx={{fontWeight:"bold"}} onClose={() => setOpen(false)} severity={severity}>
      {msg}
   </Alert>
   </Snackbar>
    </React.Fragment>
  )
}

export default Registration;