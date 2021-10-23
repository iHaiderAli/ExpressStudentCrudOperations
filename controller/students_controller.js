import connection from '../config/db.js';
import { validationResult } from 'express-validator';

import StudentModel from '../models/Student.js';
import Student from '../models/Student.js';

export const getStudentsList = (req, res) => {
    StudentModel.getAllStudents((error, students) => {
        res.status(200).send(students)
    })
}

export const getStudentById = (req, res) => {

    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }

        StudentModel.getStudentById(req.params.id, (error, student) => {
            res.status(200).send(student)
        })

    } catch (e) {
        res.status(400).send(e)
    }

}

export const createDataBase = (req, res) => {
    let sql = "CREATE DATABASE students";
    connection.query(sql, (error) => {
        if (error) {
            throw error
        }
        res.send('database created')
    })
}

export const createTable = (req, res) => {
    let sql = "CREATE TABLE student(id int AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY(id))";
    connection.query(sql, (error) => {
        if (error) {
            throw error
        }
        res.send('Student table created')
    })
}

export const createStudent = (req, res) => {

    try {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }

        const student = new Student(req.body);

        Student.createStuent(student, (error, student) => {
            if (error)
                res.send(error)
            res.json({ status: true, message: "Student created successfully"})
        })

    } catch (e) {
        res.status(400).send(e)
    }
}

export const updateStudent = (req, res) => {

    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }

        const student = new Student(req.body);

        Student.updateStudent(req.params.id, student, (error, student) => {
            if (error)
                res.send(error)
            res.json({ status: true, message: "Student updated successfully" })
        })

    } catch (e) {
        res.status(400).send(e)
    }

}

export const deleteStudent = (req, res) => {

    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }

        Student.deleteStudent(req.params.id, (error, student) => {
            if (error)
                res.send(error)
            res.json({ status: true, message: "Student deleted successfully" })
        })

    } catch (e) {
        res.status(400).send(e)
    }
}

