/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import styled from 'styled-components'
import Loader from "react-loader-spinner";
import UserCard from '../components/UserCard';
import { Link } from 'react-router-dom';

const OuterContainer=styled.div`
background-image: url("https://source.unsplash.com/fFX2vB_NNzQ/2200x1100");
height: 100%;
background-attachment: fixed;
`

const Container=styled.div`
margin: 0rem 8rem;
width: 80%;
`
const InnerContainer=styled.div`
width: 100%;
color: white;
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
padding: 10px;
`


export default function UserList() {
    const users=useSelector(state=>state)
    console.log(users)
    const dispatch=useDispatch()

    const getUsers=async()=>{
        try{
         dispatch({type:"fetching"})
        const res = await axios.get("https://mobo-user.herokuapp.com/users/")
        console.log(res.data)
        dispatch({type:"fetchSuccess",payload:res.data})
        console.log(users)
        }
        catch(error)
        {
            dispatch({type:"fetchFail"})
        }
        }

    useEffect(()=>{
        console.log("in use")
    
            getUsers()
        },[])
        
console.log(users)
    return (
        <OuterContainer>
            <Container>
              <InnerContainer>
                  <div >
                      <h2>Users List</h2>
                  </div>
                  <div >
                  <Link to="/user/add"> <button className="btn btn-dark">Add User</button></Link>
                  </div>
              </InnerContainer>
              {  
                  users.isFetching && (
                        <div style={{height:"100vh"}}>
                <Loader style={{display:"flex",justifyContent:"center" ,margin:"9rem"}}
                  type="Puff"
                  color="#c23683"
                  height={100}
                  width={100}
                />
                </div>) }
                {
                    users.users && !users.isFetching && <UserCard    getUser={getUsers}/>
                }
              </Container>
        </OuterContainer>
    )
}
