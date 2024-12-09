package com.example.Course_App.repo;

import com.example.Course_App.entity.Courses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Courses , Long> {
}
