import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { ListGroup } from "react-bootstrap";
import { Row,Col } from 'react-bootstrap';
import {Image} from'react-bootstrap';
import RestuarantOp from'./RestuarantOp';
import RestuarantReview from'./RestuarantReview';
import { useDispatch,useSelector } from 'react-redux';

function RestuarantDetails() {
  //1.get restuarant id from url
  const urlParams = useParams()
  console.log(urlParams.id);

    //2.create state for holding restuarantlist
  //  const [restaurantList,setRestaurant]=useState ([])


    //3.api call
//     const fetchData = async()=>{
//       await fetch('/restaurants .json')
//       .then((data)=>data.json()
//  .then(res=>setRestaurant(res.restaurants))
//       )
//      }

//to fetch updated state from store
const {restuarantList} = useSelector((state)=>state.restListReducer)
console.log(restuarantList);

     //4.to hold items or values when a component is created
useEffect(()=>{
//  fetchData()
},[])


//5.find restuarant whose id is given in urlParams
 const restuarant = restuarantList.find(item=>(
  item.id==urlParams.id
 ))
 console.log(restuarant);



  return (
    <div>
    {
      restuarant ? (
     <Row className='my-3'>
      <Col md={3}>
      <Image className="border rounded" src={restuarant.photograph} fluid></Image>
      </Col>
      <Col className='mx-3' md={8}>
        <ListGroup>
          <ListGroup>
            <h2>{restuarant.name}</h2>
            <p>{restuarant.neighborhood}</p>
          </ListGroup>
          <ListGroup.Item>
        <p>Cuisine Type:{restuarant.cuisine_type}</p>
          </ListGroup.Item>
          <ListGroup.Item>
        <p>Address:{restuarant.address}</p>
          </ListGroup.Item>
          
          <ListGroup.Item>
      <RestuarantOp op={restuarant.operating_hours}/>
           </ListGroup.Item>
           <ListGroup.Item>
      <Row>
        <RestuarantReview data={restuarant.reviews}/>
      </Row>
           </ListGroup.Item>
        </ListGroup>
        
         
         </Col>

      </Row>
      
      ):'no data'
}
</div>
  )
}
   
export default RestuarantDetails







