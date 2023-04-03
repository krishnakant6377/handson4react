import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';
import Nopage from './Components/Nopage';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
       
          <Route path="/student" element={<Student />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/*' element={<Nopage/>}/>
        
      </Routes>
   
      </BrowserRouter>
    
    </div>
  );
}

export default App;
