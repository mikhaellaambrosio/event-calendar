import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from "./pages/Home"
import CreateUser from "./pages/CreateUser"
import AppNavbar from './components/AppNavbar';

function App() {
  return (
    // <div>hello world</div>
    <BrowserRouter>
      <AppNavbar/>
      <Routes>
        {/* <Route path="/" element={ <Home/> }/> */}
        <Route path="/" element={ <CreateUser/> }/>

      </Routes>
      </BrowserRouter>
  );
}

export default App;
