import './App.css';
import SuperHeros from './components/SuperHeros';
import { Routes, Route } from 'react-router-dom';
import SingleSuperHero from './components/SingleSuperHero';
import SearchCharacter from './components/SearchCharacter';

function App() {
  return (
    <div className='app'>
      <SearchCharacter />
      <Routes>
        <Route path='/' element={<SuperHeros />} />
        <Route path='/superHero' element={<SingleSuperHero />} />
      </Routes>
    </div>
  );
}

export default App;
