import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';


const Login = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [severity, setSeverity] = useState("success");

  const Navigate=useNavigate();

  let base_url=`${process.env.REACT_APP_BASE_URL}`

  const handleLogin = async() => {

   if( !email || !password ){

      setMsg("Please enter your details");

      setOpen(true);

      setSeverity("warning")

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
   
   let res = await fetch(`${base_url}/registration_data`,{
      
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

        setMsg("Login Successfull,Congratulations!");

        setOpen(true);

        setSeverity("success");

        setTimeout(()=>{

          Navigate("/dashboard");

       },2000)

        

      }else{

        setMsg("Please, Register to Kalvian's Management System");

        setOpen(true);

        setSeverity("error");

        setTimeout(()=>{

        Navigate("/register");

        },2000)

      }
  }

  

  return (
    <React.Fragment>
    <Box sx={{background:"#FFF",minHeight:"100vh"}}>
    <Box component="form" borderRadius="17px" background="#FFFFFF" boxShadow="4px 4px 4px 4px rgb(0,0,0,0.25)" sx={{display:"flex",flexDirection:"column",width:"33%",margin:"auto",marginTop:"10vh"}} >
        <Typography variant="h5" color="#8CB082" m="auto" mt={5} mb={5} fontWeight="bold">LOGIN</Typography>

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
        <Button onClick={handleLogin} variant="contained" sx={{width:"25%",m:"auto",mb:"5%",fontSize:"20px",fontWeight:"bold",background:"#8CB082",color:"#FFF"}}>SIGN IN</Button>
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

export default Login;