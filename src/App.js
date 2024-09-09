import './App.css';
import { Routes, Route } from 'react-router-dom';
import Roster from './components/Roster';
import Character from './components/Character'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Roster/>} />
        <Route path='/Character/:id' element={<Character />}/>
      </Routes>

    </div>
  );
}

export default App;
