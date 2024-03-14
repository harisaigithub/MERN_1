import './App.css';
import Navbar from './component/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import View from './component/View';
import About from './component/About';
import Addstud from './component/Addstud';
import Edit from './component/Edit';
import Home from './component/Home';
import Allstud from './component/Allstud';
function App() {
  return (
  <BrowserRouter>
      <Navbar />
      <Routes >
      <Route  path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/allstud' element={<Allstud />} />
          <Route  path='/addstud' element={<Addstud />} />
          <Route  path="/view/:id" element={<View />} />
          <Route  path="/edit/:id" element={<Edit />} />
      </Routes>
   
  </BrowserRouter>
  );
}

export default App;
