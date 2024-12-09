import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap"
import axios from "axios";
import Base_url from "../api/api";
import { data } from "react-router-dom";
import { toast } from "react-toastify";

const AddCourses = () => {
    useEffect(()=>{
        document.title="AddCourses"
    },[]);


    const [course, setCourses]=useState({})

    //handelForm function
    const handelForm=(e)=>{
        console.log(course);
        postData(course)
        e.preventDefault()
        
    }

// creating function to send data server
   const postData = (data)=>{
      axios.post(`${Base_url}/course`,data).then(

        (response)=>{
          console.log(response);
          console.log("success");
          toast.success("Course Added SuccessFully");
          
          
        },(error)=>{
            console.log(error);
            console.log("error");
            toast.success("Failed To Added Course");
        }
      )
   }


    return (<Fragment>
        <h1 className="text-center my-3">Fill Course Details</h1>
        <Form onSubmit={handelForm}>
            <FormGroup>
                <label for="userId" >Couser Id</label>
                <Input
                    id="userId"
                    name="userId"
                    onChange={(e)=>{
                        setCourses({...course, id: e.target.value})  
                      }}
                    placeholder="with a placeholder"
                    type="text"
                    
                />
            </FormGroup>

            <FormGroup>
                <label for="title" >Couser Title</label>
                <Input
                    id="title"
                    name="title"
                    onChange={(e)=>{
                        setCourses({...course, title: e.target.value})  
                      }}
                    placeholder="with a placeholder"
                    type="text"
                />
            </FormGroup>

            <FormGroup>
                <label for="discription">
                    Course Description
                </label>
                <Input
                    id="discription"
                    name="discription"
                    onChange={(e)=>{
                        setCourses({...course, discription: e.target.value})  
                      }}
                    type="textarea"
                     placeholder="with a placeholder"
                     style={{height:100}}
                />
            </FormGroup>

            <Container className="text-center">
            <Button type="submit" color="success"> Add Course</Button>
            <Button type="reset" color="warning ms-3">Clear</Button>
            </Container>
        </Form>

    </Fragment>
    )
}

export default AddCourses;