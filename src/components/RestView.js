import {React,useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Review from './Review';
import OperatingTime from './OperatingTime';
import {useSelector} from 'react-redux'


function RestView() {

  const params=useParams()



  // console.log(params.id);


  


  // console.log(data);

  useEffect(()=>{
  },[])
  const {restaurantList}=useSelector(state=>state.restaurantReducer)
  const restaurant =restaurantList.find(item=>item.id==params.id)
  console.log(restaurant);
  

  return (
    <>
    {
      restaurant?(
    <Row>
      <Col lg={6} md={6} className='p-5 ms-5 text-center'>
<img className='rounded border' style={{height:'600px'}} src={restaurant.photograph}/>
      </Col>

      <Col lg={6} md={6}  className='p-5 ms-5 text-center'>
      <ListGroup className='p-5 ms-5 text-center'>
      <ListGroup.Item>{restaurant.name}</ListGroup.Item>
      <ListGroup.Item>{restaurant.neighborhood}</ListGroup.Item>
      <ListGroup.Item>{restaurant.address}</ListGroup.Item>
      <ListGroup.Item>{restaurant.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>

    <div className='mt-4'> <OperatingTime timeData={restaurant.operating_hours} /> </div>    

   <div className='mt-3'>  <Review reviewData={restaurant.reviews}/></div>     

      </ListGroup.Item>

    </ListGroup>

      </Col>
    </Row> ):""
}
</>
  )
}

export default RestView