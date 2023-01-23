import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({item}) {
  return (
   
    <Link to={`/restdetails/${item.id}`} style={{textDecoration:'none' ,color:'white'}}>
    {/* card desgin to display restuarant details */}
     <Card  className='my-2 mx-1'>
    <Card.Img className='p-1' variant="top" src={item.photograph} />
    <Card.Body >
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
       <p>Cusine: {item.cuisine_type}</p>
      </Card.Text>
      <Card.Text>
       <p> {item.neighborhood}</p>
      </Card.Text>
 
    </Card.Body>
  </Card>
  </Link>
  )
}

export default RestCard