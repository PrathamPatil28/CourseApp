package com.example.Course_App.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Objects;

@Entity
@Table(name = "courses")

public class Courses {
    @Id
    private long id;
    private String title;
    private String description;

    public Courses(){

    }

    public Courses(long id, String title,String description) {
        this.description = description;
        this.id = id;
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "Courses{" +
                "description='" + description + '\'' +
                ", id=" + id +
                ", title='" + title + '\'' +
                '}';

    }



}
