import {React,useState,useEffect} from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {restList} from '../actions/restaction'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'


function Restuarant() {

  // state to hold data from api
//   var [restaurantList,setRestaurant]=useState([])

//   // function to call API
// const fetchData=async()=>{
//  const result = await fetch('/restaurants.json')
//  result.json().then(data =>{
//   setRestaurant(data.restaurants)
//  })
// }


const dispatch=useDispatch()

useEffect(()=>{
  // fetchData()

  dispatch(restList())

},[])

const {restaurantList}=useSelector(state=>state.restaurantReducer)
  return (
    <Row>
      {
        restaurantList.map(item=>(
          <Col className='p-5' lg={4} md={6}>
              <Restcard restdata={item}></Restcard>
          </Col>
        ))
      }
    </Row>
  )
}

export default Restuarant