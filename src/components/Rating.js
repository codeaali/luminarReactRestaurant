import React from 'react'
import {Card, Row} from 'react-bootstrap'

function Rating({data}) {
    console.log(data);
    return (
        <Row>
            
        {data ? data.map(items=>(
            <Card className="my-3 p-3">
            
         
            <Card.Body>
               <Card.Title >
                   <h4>Name: {items.name}</h4>
               </Card.Title>
               <Card.Text >
                   <p>{items.date}</p>
               </Card.Text>
               <Card.Text >
                   <p>Rating: {items.rating}/5</p>
               </Card.Text>
               <Card.Text >
                   <p>{items.comments}</p>
               </Card.Text>
      
            </Card.Body>
           </Card>
        )):"error"}
        </Row>
       
    )
}

export default Rating
