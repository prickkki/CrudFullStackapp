package com.example.fullstackcrudv01.service;

import com.example.fullstackcrudv01.model.Student;
import com.example.fullstackcrudv01.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

     @Autowired
     private StudentRepository repository;

    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public List<Student> saveStudents(List<Student> students) {
        return repository.saveAll(students);
    }

    public List<Student> getStudents() {
        return repository.findAll();
    }

    public Student getStudentById(long id) {
        return repository.findById(id).orElse(null);
    }

    public Student getStudentByName(String name) {
        return repository.findByName(name);
    }

    public String deleteStudent(long id) {
        repository.deleteById(id);
        return "Student removed !! " + id;
    }


    public Student updateStudent(long id ,Student student) {
        Student existingStudent = repository.findById(id).orElse(null);
        existingStudent.setName(student.getName());
        existingStudent.setAge(student.getAge());
        existingStudent.setCollageYear(student.getCollageYear());
        existingStudent.setPhone(student.getPhone());
        existingStudent.setCollage(student.getCollage());

        return repository.save(existingStudent);
    }


}


