import { FormControl, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Data from "../data/db.json"

const Home = () => {

  console.log(Data.students_data)

  const [category, setCategory] = useState('');
  const [data, setData] = useState([]);
  console.log(data)
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(()=>{
    setData(Data.students_data)
  },[Data])


  return (
    <React.Fragment>
      <Box width="100%" height="100vh" display="flex">
        <Box width="25%" minHeight="100vh" position="fixed" backgroundColor="#8CB082">
          <Box width="80%" m="auto" mt="10%" backgroundColor="#F3F7F2"  borderRadius="7px">
            <FormControl sx={{ width: "80%",pl:"10%",pt:"10%",pb:"10%" }}>
              <Typography mb="2%" mt="5%">Title</Typography>
              <TextField
                label="Enter your name"
              />
              <Typography mb="3%" mt="5%">Category</Typography>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="demo-simple-select-label" htmlFor="select">
                  Select an option
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select Category"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </Select>
              </FormControl>
              <Typography mb="3%" mt="5%">Mentors</Typography>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="demo-simple-select-label" htmlFor="select">
                  Select an option
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select Category"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </Select>
              </FormControl>
              <Typography mb="3%" mt="5%">Scheduled</Typography>
              <TextField
                type="date"
              />
            </FormControl>
          </Box>
        </Box>
        
        <Box height="100vh" width="25%" className="dummy-box" >
        </Box>
        <Box minHeight="100vh" width="75%" backgroundColor="#F3F7F2" mt="-88px" pt="88px">
      
        {data && data?.map((student,index) => 
        <Box  key={index} width="85%" m="auto" mt={5} >
            <Typography variant="h5" fontWeight="bold" mb={3}>Today's Schedule</Typography>
            {student.schedule.map((item,index) => 
              <Box key={index} border="1px solid" borderRadius="7px" p={3} mb={5} boxShadow="3px 3px 3px 3px rgb(0,0,0,0.30)">
                <Typography variant="h5" color="#63517C" fontWeight="bold">{item.title}</Typography>
                <Typography variant="h7" fontStyle="italic" color="#808080">Scheduled by {item.scheduledBy} at {item.scheduledDate} - {item.scheduledTime}</Typography>
              </Box>
            )}
          </Box>
          )}
        </Box>
      </Box>
      
    </React.Fragment>
  )
}

export default Home