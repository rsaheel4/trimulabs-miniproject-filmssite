import React from 'react'
import { List, Skeleton } from 'antd';
import { Link } from 'react-router-dom';

function FilmList({films}) {
    
    return (
        <List
            itemLayout="horizontal"
            dataSource={films}
            renderItem={(item) => (
            <List.Item>
                <Skeleton loading={false}>
                    <List.Item.Meta
                        title={<Link to={`/${item.id}`}>{item.title}</Link>}
                        description={
                        <div>
                            <b>Director: </b> {item.director}
                            <br></br>
                            <b>Producer: </b> {item.producers}
                        </div>}
                    />
                    <div>
                        <b>Release Date: </b> {item.releaseDate}
                    </div>
                </Skeleton>       
            </List.Item>
            )}
        />
  )
}

export default FilmList