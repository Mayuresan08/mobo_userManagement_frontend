import React, { useState } from 'react'
import styled from 'styled-components'
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineMobile } from "react-icons/ai";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Modal,Button } from 'react-bootstrap';
import axios from 'axios';

const CardContainer=styled.div`
margin: 1rem;
padding: 20px;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 1rem;
`
const Card=styled.div`
padding: 7px;
border: 1px solid white;
border-radius: 5px;
width: 18rem;
background-color: whitesmoke;
display: flex;
flex-direction: column;
`

const CardHeader=styled.div`
display: flex;
justify-content: center;
border-bottom: 1px solid black;
`
const CardBody=styled.div`
margin-top: 1rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 0.3rem;
font-size: 1rem;
border-bottom: 1px solid black;
`

const CardFooter=styled.div`
display: flex;
justify-content: space-around;
font-size: 1.1rem;
margin-top: 1rem;
`

export default function UserCard(props) {

    const users=useSelector(state=>state.users)
    const [show,setShow]=useState(false)
    const [user,setUser]=useState({})
    
    const handleClose=()=>setShow(false)

    const handleDelete=(value)=>{
        console.log(value)
        setUser(value)
        setShow(true)
        console.log(user)

    }

    const handleConfirmDelete=async()=>{

        try{
            await axios.delete(`http://localhost:3001/users/${user._id}`)
           props.getUser()
        }
        catch(err)
        {
            console.log(err)
        }
    }
    return (
        <div>
            <CardContainer>
            <Modal show={show} onHide={handleClose}>
        <Modal.Body>Are you sure you want to delete the user {user.username} </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
{  users.map((user)=>{
      return(
  <div>
     
  <Card>
      <CardHeader>
          <h6><b><FiUser/>{user.username}</b></h6>
      </CardHeader>
    <CardBody>
        <div style={{display:"flex" ,justifyContent:"space-around",width:"60%"}}>
        <div><p className=""><HiOutlineMail/></p></div>
        <div><p>{user.email}</p></div>
        </div>
        <div style={{display:"flex" ,justifyContent:"space-around",width:"60%"}}>
        <div><p><AiOutlineMobile/></p></div>
        <div><p>{user.mobile}</p></div>
        </div>
    </CardBody>
    <CardFooter>
        <div>
           <Link to={`user/${user._id}`}> <button className="btn btn-primary">Edit</button></Link>
        </div>
        <div>
            <button className="btn btn-danger" onClick={()=>handleDelete(user)}>Delete</button>
        </div>
    </CardFooter>
  </Card>
  
  </div>
  )
})
}
</CardContainer>
        </div>
    )
}
