/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const OuterContainer=styled.div`
background-image: url("https://source.unsplash.com/fFX2vB_NNzQ/2200x1100");
height: 100vh;
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
const MainContainer=styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 100%;
height: 75vh;
justify-content: center;
align-items: center;
color: white;
`


export default function Home() {
    return (
        <OuterContainer>
            <Container>
              <InnerContainer>
                  <div >
                      <h2 style={{color:"black"}}>IUsers</h2>
                  </div>
                  <div style={{color:"black"}}>
                        <div className="d-flex -center gap-4">
                        <a href="#" style={{textDecoration:"none"}}>For Business</a>
                        <a href="#" style={{textDecoration:"none"}}>Login</a>
                        </div>
                  </div>
              </InnerContainer>
                <MainContainer>
                    <div><h3>Manage your users by clicking below </h3></div>
                    <div><button className="btn btn-success"><Link to="/user" style={{textDecoration:"none" ,color:"inherit"}}><h6>User Control</h6></Link></button></div>
                </MainContainer>
              </Container>
              </OuterContainer>
    )
}
