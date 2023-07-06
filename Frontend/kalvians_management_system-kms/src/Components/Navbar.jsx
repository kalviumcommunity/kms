import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { AppBar, Box, Toolbar, Typography, Stack, IconButton } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{height:"88px",width:"100%",display:"flex",justifyContent:"center",background:"#8CB082"}}>
      <Toolbar>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%"}}>
            <Box sx={{width:"250px",height:"44px"}} component="img" src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg">

            </Box>
          <Box sx={{display:"flex",alignItems:"center",fontWeight:"500"}}>
             <Box sx={{height:"44px",backgroundColor:"white",color:"#000000",borderRadius:"7px",width:"986px",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                <Typography variant="h7">DASHBORAD</Typography>
                <Typography variant="h7">ASSIGNMENTS</Typography>
                <Typography variant="h7">DISCUSSION FORUM</Typography>
                <Typography variant="h7">NOTIFICATIONS</Typography>
                <Typography variant="h7">TICKETS</Typography>
                <Typography variant="h7">ANNOUNCEMENTS</Typography>
             </Box>
            <IconButton sx={{marginLeft:"2%"}}>
              <AccountCircleIcon sx={{width:"50px",height:"50px",color:"white"}}></AccountCircleIcon>
            </IconButton>
          </Box>
          </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;
