import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import { useGetAllFilms } from './apollo/queries';
import HomePage from './components/HomePage';
import FilmDetail from './components/FilmDetail';
import Loading from './components/Loading';

function App() {

  const {loading, data} = useGetAllFilms()
  const [films, setFilms] = useState([])

  if(loading) return <Loading />

  return (
    <Router>
      <div className="App">
      <Routes>
          <Route exact path="/" element={<HomePage data={data} films={films} setFilms={setFilms}/>} />
          <Route exact path="/:filmID" element={<FilmDetail />} />
          <Route path="*" element={<h1 className='error-page'>404 Page Not Found</h1>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
