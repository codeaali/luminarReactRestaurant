import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Restaurants({data}) {
    return (
        <Link to={`restaurants/${data.id}`}>
        <Card className="my-3 p-3">
         <Card.Img src={data.photograph} className="p-3" variant="top"/>
         <Card.Body>
            <Card.Title >
                <h4>{data.name}</h4>
            </Card.Title>
            <Card.Text >
                <p><strong>Cusine:</strong>{data.cuisine_type}</p>
            </Card.Text>
            <Card.Text >
                <p>{data.neighborhood}</p>
            </Card.Text>
   
         </Card.Body>
        </Card>
        </Link>
    )
}

export default Restaurants
