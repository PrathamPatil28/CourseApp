package com.example.Course_App.services;

import com.example.Course_App.entity.Courses;
import com.example.Course_App.repo.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CourseServicesImpl implements CourseService{
    @Autowired
    CourseRepo repo;


    @Override
    public List<Courses> getAllCourses() {
        return repo.findAll();
    }

    @Override
    public Optional<Courses> getCourse(long courseId) {
//        Courses courses = null;
//
//
//         for (Courses courses1 : list){
//             if (courses1.getId() == courseId){
//                 courses = courses1;
//             }
//         }
//
//        return courses;

        return repo.findById(courseId);
    }

    @Override
    public Courses addCourse(Courses courses) {
        return repo.save(courses);
    }

    @Override
    public void deleteById(Long Id) {
       repo.deleteById(Id);
    }


    @Override
    public Courses updateCourses(Long Id, Courses courses) {
//        list.forEach(e->{
//            if (e.getId() == courses.getId()){
//                e.setTitle(courses.getTitle());
//                e.setDescription(courses.getDescription());
//            }
//        });
//        return courses;
//    }
       Courses courses1 =null;
      Optional<Courses> coursesOptional =repo.findById(Id);

      if (coursesOptional.isPresent()){

          Courses dbObject =coursesOptional.get();
          dbObject.setTitle(courses.getTitle());
          dbObject.setDescription(courses.getDescription());

         courses1 = repo.save(dbObject);
      }else {
          System.out.println("data not Found");
      }

      return courses1;
    }




}

