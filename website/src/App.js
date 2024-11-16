import './App.css';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import {Route,Routes} from 'react-router-dom';
import Textform from './Textform';
function App() {
  return (
    <>
   
    <Navbar/>
    <Routes>
    
     <Route exact path="/"element={< Home/>}/>
     <Route path="/About"element={< About/>}/> 
     <Route path="/Textform"element={< Textform/>}/> 
    </Routes>
    </>
  );
}

export default App;
