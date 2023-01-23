import React from 'react'
import { useState, useEffect } from 'react'
import RestCard from './RestCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch,useSelector } from 'react-redux';
import { allRestuarantsList } from '../actions/restuarantListAction';


function RestuarantLists() {
  //create state for holding restuarantlist
 // const [restaurantList, setRestaurant] = useState([])

  //api call
  //     const fetchData = async()=>{
  //      await fetch('/restaurants .json')
  //      .then((data)=>data.json()
  // .then(res=>setRestaurant(res.restaurants))
  //      )
  //     }
  //to use useDispatch hook
  const dispatch = useDispatch()

//to get updated state from store
const {restuarantList} = useSelector((state)=>state.restListReducer)
console.log(restuarantList);







  //to hold items or values when a component is created
  useEffect(() => {
    // fetchData()
    //dispatch action
    dispatch(allRestuarantsList())
  }, [])


  return (
    //RestCard
    <Row>
      {
        restuarantList.map(restuarant => (
          <Col md={6} lg={4} xl={3}>
            {/* child */}
            <RestCard item={restuarant} />
          </Col>
        ))
      }


    </Row>
  )
}

export default RestuarantLists