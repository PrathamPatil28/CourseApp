import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import Base_url from "../api/api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateCourses = () => {
  const { id } = useParams();
  const [course, setCourses] = useState({});

  useEffect(() => {
    document.title = "UpdateCourses";
    fetchCourseDetails();
  }, []);

  const fetchCourseDetails = async () => {
    try {
      const response = await axios.get(`${Base_url}/course/${id}`);
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching course details:", error.response || error);
      toast.error("Failed to fetch course details.");
    }
  };

  const handelForm = (e) => {
    e.preventDefault();
    if (!course.title || !course.description) {
      toast.error("Title and Description are required!");
      return;
    }
    updateCourse(course);
  };

  const updateCourse = async (data) => {
    try {
      const response = await axios.put(`${Base_url}/course/${id}`, data);
      toast.success("Course Updated Successfully");
    } catch (error) {
      console.error("Error updating course:", error.response || error);
      toast.error("Failed to Update Course");
    }
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Update Course Details</h1>
      <Form onSubmit={handelForm}>
        <FormGroup>
          <label htmlFor="userId">Course Id</label>
          <Input
            id="userId"
            name="userId"
            value={course.id || ""}
            disabled
            placeholder="Course ID"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">Course Title</label>
          <Input
            id="title"
            name="title"
            value={course.title || ""}
            onChange={(e) => setCourses({ ...course, title: e.target.value })}
            placeholder="Enter Course Title"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Course Description</label>
          <Input
            id="description"
            name="description"
            value={course.description || ""}
            onChange={(e) =>
              setCourses({ ...course, description: e.target.value })
            }
            type="textarea"
            placeholder="Enter Course Description"
            style={{ height: 100 }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Update Course
          </Button>
          <Button
            type="reset"
            color="warning ms-3"
            onClick={() => setCourses({ title: "", description: "" })}
          >
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default UpdateCourses;
