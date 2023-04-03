import React from 'react'
import Card from 'react-bootstrap/Card';
import './Restcard.css'

function Restcard({restdata}) {
  return (
    <>
<Card style={{ width: '16rem' }} className="d1" >
      <Card.Img variant="top" src={restdata.photograph} />
      <Card.Body>
        <Card.Title>{restdata.name}</Card.Title>
        <Card.Text>
         <p>{restdata.neighborhood}</p>
         <p>{restdata.cuisine_type}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Restcard