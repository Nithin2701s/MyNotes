import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
function App() {
  return (
    <div className="App">
      <NoteState>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About/>}/>
        {/* <Route path='/users' element={<Users/>}/> */}
      
      </Routes>
      
       
      </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
