package com.example.Course_App.repo;

import com.example.Course_App.entity.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.Optional;

@Repository
public interface CourseRepo extends JpaRepository<Course, Long> {

    // 1. Safe active entity lookup (ignores soft-deleted records)
    Optional<Course> findByIdAndActiveTrue(Long id);

    // 2. Paginated active list
    Page<Course> findByActiveTrue(Pageable pageable);

    // 3. Search courses by title (case-insensitive with pagination)
    Page<Course> findByTitleContainingIgnoreCaseAndActiveTrue(String title, Pageable pageable);

    // 4. Financial range query (e.g. fee filter slider)
    Page<Course> findByFeesBetweenAndActiveTrue(BigDecimal minFees, BigDecimal maxFees, Pageable pageable);

    // 5. Duplicate title validation
    boolean existsByTitleIgnoreCaseAndActiveTrue(String title);

    // 6. Native / JPQL example: count active courses
    @Query("SELECT COUNT(c) FROM Course c WHERE c.active = true")
    long countActiveCourses();
}
