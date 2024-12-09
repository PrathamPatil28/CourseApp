package com.example.Course_App.services;

import com.example.Course_App.entity.Courses;

import java.util.List;
import java.util.Optional;


public interface CourseService {
    public List<Courses> getAllCourses();

    public Optional<Courses> getCourse(long courseId);

    public Courses addCourse(Courses courses);

    public void deleteById(Long Id);

    Courses updateCourses(Long Id, Courses courses);
}
