package com.example.Course_App.controller;

import com.example.Course_App.entity.Courses;
import com.example.Course_App.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/course") // Base path for all course-related endpoints
public class CourseController {

    @Autowired
    private CourseService service;

    // Get all courses
    @GetMapping
    public List<Courses> getCourses() {
        return service.getAllCourses();
    }

    // Get a single course by ID
    @GetMapping("/{courseId}")
    public Optional<Courses> getCourse(@PathVariable Long courseId) {
        return service.getCourse(courseId);
    }

    // Add a new course
    @PostMapping
    public Courses addCourse(@RequestBody Courses courses) {
        return service.addCourse(courses);
    }

    // Update an existing course by ID
    @PutMapping("/{Id}")
    public Courses updateCourses(@PathVariable Long Id, @RequestBody Courses courses) {
        return service.updateCourses(Id, courses);
    }

    // Delete a course by ID
    @DeleteMapping("/{Id}")
    public String delete(@PathVariable Long Id) {
        service.deleteById(Id);
        return "Course Deleted Successfully.";
    }
}
