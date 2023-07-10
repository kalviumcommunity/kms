import React from 'react';
import { AppBar, Box, Toolbar, Typography, Stack, IconButton } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  hoverable: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

const Navbar = () => {

  const classes = useStyles();

  return (
    <>
    <AppBar position="fixed" sx={{ boxShadow: 'none',height:"88px",width:"100%",display:"flex",justifyContent:"center",background:"#8CB082"}}>
      <Toolbar>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:"100%"}}>
            <Box sx={{width:"250px",height:"44px"}} component="img" src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg">

            </Box>
          <Box sx={{display:"flex",alignItems:"center",fontWeight:"500",width:"75%"}}>
             <Box sx={{height:"44px",backgroundColor:"#FFFFFF",color:"#000000",borderRadius:"7px",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                <Typography variant="h7" className={classes.hoverable} >DASHBOARD</Typography>
                <Typography variant="h7" className={classes.hoverable}>ASSIGNMENTS</Typography>
                <Typography variant="h7" className={classes.hoverable}>DISCUSSION FORUM</Typography>
                <Typography variant="h7" className={classes.hoverable}>NOTIFICATIONS</Typography>
                <Typography variant="h7" className={classes.hoverable}>TICKETS</Typography>
                <Typography variant="h7" className={classes.hoverable}>ANNOUNCEMENTS</Typography>
             </Box>
            <IconButton sx={{marginLeft:"2%"}}>
              <AccountCircleIcon sx={{width:"50px",height:"50px",color:"white"}}></AccountCircleIcon>
            </IconButton>
          </Box>
          </Stack>
        </Toolbar>
    </AppBar>
    <Box sx={{height:"80px"}}>

    </Box>
    </>
  )
}

export default Navbar;
