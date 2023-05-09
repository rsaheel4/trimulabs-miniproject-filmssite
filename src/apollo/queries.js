import { gql, useQuery } from "@apollo/client";

// Custom hook to get all the films
export const useGetAllFilms = () => {
  /** 
   * reference https://studio.apollographql.com/public/star-wars-swapi/variant/current/explorer
   * Query to get all the films
  */
  const GET_FILMS = gql`
  query{
    allFilms {
      films {
        id
        title
        director
        producers
        created
        releaseDate
        edited
        episodeID
        openingCrawl
      }
    }
  }`;
  return useQuery(GET_FILMS)
}

// custom hook to fetch single film
export const useGetFilm = (filmID) => {
  /** 
   * reference https://studio.apollographql.com/public/star-wars-swapi/variant/current/explorer
   * Query to get a single film
  */
  const GET_FILM = gql`
  query ($filmId: ID) {
    film(id: $filmId) {
      id
      title
      director
      producers
      created
      releaseDate
      edited
      episodeID
      openingCrawl
    }
  }
  `;

  return useQuery(GET_FILM, {
    variables: {filmId: filmID}
  })
}