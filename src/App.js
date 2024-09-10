import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Roster from './components/Roster';
import Character from './components/Character'


function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="container">
        <div className="gradient"></div>
      <Routes>
        <Route path='/' element={ <Roster/>} />
        <Route path='/Character/:id' element={<Character />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
