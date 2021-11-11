import React,{useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Formik,Form,Field,ErrorMessage} from "formik"
import * as YUP from "yup"
import Loader from "react-loader-spinner";
import { Link } from 'react-router-dom'
import { medium,small } from '../responsive'


const OuterContainer=styled.div`
background-image: url("https://source.unsplash.com/fFX2vB_NNzQ/2200x1100");
height: 100vh;
width: 100%;
background-repeat: no-repeat;
${medium({height:"100%"})}
`

const Container=styled.div`
margin: 0rem 8rem;
width: 80%;
${medium({margin:"0",width:"100%"})}

`
const Input=styled(Field)`
height: 2rem;
margin:1rem 0;
width: 30rem;
text-align: center;
${small({width:"15rem"})}

`



const Button=styled.button`
border: none;
background-color: black;
color: white;
padding: 8px;
margin-bottom: 1rem;
width: 12rem;
`
const Error=styled.div`
color: red;
font-size: 0.8rem;
`


const FormContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5rem;
`
const Label=styled.label`

width: 100%;
text-align: center;
color: white;
font-size: 1.3rem;
`
export default function UserAdd() {
    const [info,setInfo]=useState("")
    const [loading,setLoading]=useState(false)

    const addUserSchema=YUP.object().shape({
        username:YUP.string().required("Please Enter UserName").min(6,"Username length should be more than 5"),
        email:YUP.string().required("Please Enter Email").email(),
        mobile:YUP.number().min(10).required()
    })
    return (
        <OuterContainer>
            <Container>
            <FormContainer>
                <div> <h3 style={{color:"white"}}>Add User</h3></div>
               <div> <Formik
                        initialValues={
                            {
                                username:"",
                                email:"",
                                mobile:0
                            }
                        }
                        validationSchema={addUserSchema}
                        onSubmit={async(values,{resetForm})=>{
                            setInfo("")
                           setLoading(true)
                            try
                            {
                               
                            const res=await axios.post(`https://mobo-user.herokuapp.com/users/`,values)   
        
                            console.log(res)
                            if(res.status === 201) setInfo("User Created Successfully")
                            else if(res.status === 400) setInfo("User Already Exists")
                            resetForm()
                            setLoading(false)
                            }
                            catch(err)
                            {
                                console.log(err)
                                setInfo("oops something went wrong!")
                                resetForm()
                                setLoading(false)
                            }
                        }}>
                        {()=>{
                            return (
                                
                            <Form>
                               
                                <div className="form-group">
                                    <Label> UserName</Label>   
                            <Input type="text" placeholder="UserName"  className="form-control" id="username" name="username"/>
                            <Error><ErrorMessage name="username"/></Error>
                            </div>
                            <div className="form-group">
                            <Label> Email</Label>
                            <Input type="text" placeholder="Email" className="form-control" id="email" name="email"/>
                            <Error><ErrorMessage name="email"/></Error>
                            </div>
                            <div className="form-group">
                            <Label> Mobile Number</Label>
                            <Input type="text" placeholder="Number" className="form-control" id="mobile" name="mobile"/>
                            <Error><ErrorMessage name="mobile"/></Error>
                            </div>
                            
                            <div style={{display:"flex",justifyContent:"center"}}>
                                { loading && 
                                <>
                                <Loader
                                type="Bars"
                                color="#adb4ec"
                                height={30}
                                width={30}                               
                               />
                                </>}
                            </div>
                            <div className="text-center">
                                <Button  type="submit">Create</Button>
                            </div>
                            <div style={{display:"flex",justifyContent:"center"}}>
                                <p style={{color:"orange"}}>{info}</p>
                            </div>
                            <div>
                               <Link to="/user"> <Button>View List</Button></Link>
                            </div>
                            
                        </Form>
                            )
                        }}
                    </Formik></div>
                </FormContainer>
            </Container>
        </OuterContainer>
    )
}
