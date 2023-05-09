import React from 'react'
import FilmList from './FilmList'
import Search from './Search'

function HomePage({data, films, setFilms}) {

  return (
    <div className='conatiner'>
        <div className="wraper">
            <div className="main-heading"> List of Films </div>
            <Search setFilms={setFilms} data={data}/>
            <FilmList films={films}/>
        </div>
    </div>
  )
}

export default HomePage