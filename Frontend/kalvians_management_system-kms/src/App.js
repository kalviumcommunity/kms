import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Navbar></Navbar>
        <h1 className='header'>KMS</h1>
      {/* </header> */}
    </div>
  );
}

export default App;
