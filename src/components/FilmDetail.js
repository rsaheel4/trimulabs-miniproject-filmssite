import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetFilm } from '../apollo/queries'
import Loading from './Loading'
import { Card, Row, Col } from 'antd';

function FilmDetail() {

  const {filmID} = useParams()
  const {loading, data} = useGetFilm(filmID)

  if(loading) return <Loading />
  /**
    * This Row and Col is just used to centre the Card 
    */
  return (
    <>
      <Row
        style={{
          height: '100vh',
      }}
      >

      <Col
        style={{
          display: "flex",
          background: "yellow",
          alignItems: "center",
          justifyContent: "center",
          flex: 1
        }}
      >

      <Card className="antd-card" title={<span style={{fontSize: 25, fontWeight: 'bold'}}>{data.film.title}</span>} bordered={false} hoverable={true}>
          <p><b>Director: </b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {data.film.director}</p>
          <p><b>Producer: </b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {data.film.producers}</p>
          <p><b>Created On: </b> &nbsp; &nbsp; &nbsp; {data.film.created}</p>
          <p><b>Release Date: </b> &nbsp; &nbsp; {data.film.releaseDate}</p>
          <p><b>Edited: </b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {data.film.edited}</p>
          <p><b>Episode ID: </b> &nbsp; &nbsp; &nbsp; &nbsp; {data.film.episodeID}</p>
          <b>Opening Crawl: </b> 
          <p> {data.film.openingCrawl} </p>
      </Card>    
      </Col>
      </Row>
    </>
  )
}

export default FilmDetail