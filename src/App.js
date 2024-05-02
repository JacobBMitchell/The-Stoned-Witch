import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import './HomePage'
import HomePage from './HomePage';
import Shop from './Shop';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
