import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: '#8CB082',
    },
    secondary: {
      main: '#F3F7F2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box className="App" >
      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
    </Box>
    </ThemeProvider>
  );
}

export default App;
