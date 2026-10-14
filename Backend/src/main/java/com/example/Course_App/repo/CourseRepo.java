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

    /**
     * Finds an active course by ID (soft-delete safe).
     */
    Optional<Course> findByIdAndActiveTrue(Long id);

    /**
     * Returns a paginated list of all active courses.
     */
    Page<Course> findByActiveTrue(Pageable pageable);

    /**
     * Case-insensitive keyword search across title and description.
     */
    @Query("""
        SELECT c FROM Course c 
        WHERE c.active = true 
          AND (LOWER(c.title) LIKE LOWER(CONCAT('%', :query, '%')) 
               OR LOWER(c.description) LIKE LOWER(CONCAT('%', :query, '%')))
    """)
    Page<Course> searchCourses(@Param("query") String query, Pageable pageable);

    /**
     * Filter active courses by price range using precise BigDecimal bounds.
     */
    Page<Course> findByActiveTrueAndFeesBetween(BigDecimal minFee, BigDecimal maxFee, Pageable pageable);

    /**
     * Checks if a course with the same title already exists.
     */
    boolean existsByTitleIgnoreCaseAndActiveTrue(String title);
}
