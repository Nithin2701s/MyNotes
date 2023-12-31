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
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
      <NoteState>
      <BrowserRouter>
      <Navbar/>
      <Alert message='Add your notes at free'/>
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        {/* <Route path='/users' element={<Users/>}/> */}
      
      </Routes>
      </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
