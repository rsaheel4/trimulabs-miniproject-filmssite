import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Search({setFilms, data}) {

    const [query, setQuery] = useState('')
    /**
     * Function to handle search query. Based on user input, it will update the state
     * using function (setFilms) that is passed to this component through props. 
     */
    function handleQuery(e){
        setQuery(e.target.value)
        if(e.target.value === '') 
            setFilms([...data.allFilms.films])
        else
            setFilms(data.allFilms.films.filter(j => j.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    useEffect(() => {
        setFilms([...data.allFilms.films])
    },[data, setFilms])

  return (
    <input className='search'
      type="text"
      placeholder='Enter film title to search'
      value={query}
      onChange={handleQuery}
    />
  )
}

export default Search