import React, { useEffect, useState } from "react";
import Course from "./Course"; // Individual course component
import Base_url from "../api/api"; // Base URL for your API
import axios from "axios";
import { toast } from "react-toastify";

const AllCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = "All Courses";
  }, []);

  const fetchCourseApi = async () => {
    try {
      const response = await axios.get(`${Base_url}/course`);
      setCourses(response.data);
      toast.dismiss();
      toast.success("Courses loaded successfully!", {
        position: "top-right",
      });
    } catch (error) {
      console.error(error);
      toast.dismiss();
      toast.error("Something went wrong while fetching courses.");
    }
  };

  useEffect(() => {
    fetchCourseApi();
  }, []);

  // Delete function
  const deleteCourse = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this course?");
    if (!confirm) return;

    try {
      await axios.delete(`${Base_url}/course/${id}`);
      setCourses(courses.filter((course) => course.id !== id)); // Update UI after deletion
      toast.success("Course deleted successfully!");
    } catch (error) {
      console.error("Error deleting course:", error);
      toast.error("Failed to delete the course.");
    }
  };

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of Available Courses:</p>
      {courses.length > 0 ? (
        courses.map((item) => (
          <Course
            key={item.id}
            course={item}
            onDelete={deleteCourse} // Pass delete function to Course component
          />
        ))
      ) : (
        <p>No courses available</p>
      )}
    </div>
  );
};

export default AllCourse;
