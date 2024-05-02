
import './App.css';
import './HomePage'
import HomePage from './HomePage';
import Shop from './Shop';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <HomePage/>
      <Shop/>
    </div>
  );
}

export default App;
