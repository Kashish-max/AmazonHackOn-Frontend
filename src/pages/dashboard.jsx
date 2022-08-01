import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { isAuthenticated } from '../middlewares/isUserAuthenticated';
import { Redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './stylesheets/dashboard.css'
import { UpdateUser } from '../middlewares/updateUser';
import { LogOut } from '../middlewares/logOutUser';

export default function Dashboard() {

  const months = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"]; 
  const [user, setUser] = useState(isAuthenticated())
  const [userData, setUserData] = useState({})
  useEffect(() => {
    user && user.userData.then(res => {
      setUserData(res.data)
      console.log(res.data)
    })
  }, [])
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, first_name, last_name, website, description, isPrivate } = event.target
    const data = {
      username: username.value,
      email: email.value,
      first_name: first_name.value,
      last_name: last_name.value,
      website: website.value,
      description: description.value,
      isPrivate: isPrivate.value,
      userId: userData.id
    }
    UpdateUser(data);
  }
  function nFormatter(num) {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
  }
  return (
    (!user ? (<Redirect to="/login" />) : (!user.isUserAuthenticated)) ? <Redirect to="/login" /> :
      <div className='dashboard-page'>
      <Navbar bg="light">
        <Container>
            <Navbar.Brand href="/" style={{ "fontWeight": "bold"}}>Dashboard</Navbar.Brand>
          <Button variant="primary" onClick={() => LogOut()}>Log Out</Button>
        </Container>
      </Navbar>
      <Container>
      <Form className='dashboard-form-wrapper' onSubmit={handleSubmit}>

        <Row className='justify-content-between'>
          <Col lg="9" className='d-flex flex-column justify-content-between'>
            <div className='followers-info-header-wrapper'>
            <Row>
              <Col className='text-right'>
              <h6 className="f-info-header">Followers</h6>
              <h3 className='f-info-header-count'>{nFormatter(12345)}</h3>
              </Col>
              <Col className='text-right'>
              <h6 className='f-info-header'>Following</h6>
              <h3 className='f-info-header-count'>{nFormatter(12345635)}</h3>
              </Col>
            </Row>
            </div>
          <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <InputGroup>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            defaultValue={userData && userData.username}
            name="username"
          />
        </InputGroup>

        </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
            defaultValue={userData && userData.email}
            name="email"
          />
        </InputGroup>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <InputGroup className="mb-3">
            <InputGroup.Text>First and Last Name</InputGroup.Text>
            <Form.Control aria-label="First name" defaultValue={userData && userData.first_name} name="first_name" />
            <Form.Control aria-label="Last name" defaultValue={userData && userData.last_name} name="last_name" />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Social Media Connect</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Social Sites"
            aria-label="Social Sites"
            aria-describedby="basic-addon2"
            defaultValue={userData && userData.website}
            name="website"
          />
        </InputGroup>
        </Form.Group>

          </Col> 

          <div>
            <div><Image src="https://picsum.photos/200" alt="Your Profile Pic" roundedCircle="true" /></div>
            <Container className='upload-button-dashboard'>
              <input
                accept="image/*"
                type="file"
                id="select-image"
                name="profile_image"
                hidden
              />
              <label htmlFor="select-image" className='w-100'>
              <Button size="sm" component="span" className='mt-3 w-100' onClick={()=> document.getElementById("select-image").click()}>Upload Image</Button>
              </label>
              </Container>
          </div>
        </Row>
      
       <Form.Group className="mb-3">
          <Form.Label>About Yourself</Form.Label>
        <InputGroup>
          <InputGroup.Text>Type Here</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" defaultValue={userData && userData.description} name="description" />
        </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" className="private-acnt-radio" label="Want to Make Account Private ?" defaultChecked={userData && userData.private} name="isPrivate" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>

      </Form>
      </Container>

      <Container className='mt-5 mb-3'>
        <h3>Transactions</h3>
        <Row className='justify-content-between'>
          {
            months.map((m) => (
              <Col lg="4" className='px-2'>
                <div className='transaction-month-wrapper'>
                  <div className='d-flex'>
                    <Col lg="4" className='px-3 py-3 cell-month-wrapper'>{m}</Col>
                    <Col lg="8" className='px-4 py-3 cell-amount-wrapper'><h6>{nFormatter(78789)}</h6></Col>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}
