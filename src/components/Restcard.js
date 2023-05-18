import React from 'react'
import Card from 'react-bootstrap/Card';
import './Restcard.css'
import {Link} from 'react-router-dom'

function Restcard({restdata}) {
  return (
    <>
    <Link to={`/view-restuarant/${restdata.id}`} style={{textDecoration:'none',color:'white'}}>
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
    </Link>
    </>
  )
}

export default Restcard