import express from "express";
const router = express.Router();

import { createDataBase, createTable, getStudentsList, getStudentById, createStudent, deleteStudent, updateStudent } from '../controller/students_controller.js'
import { createStudentValidation, idValidation } from '../config/validation.js';

// To create a Database
router.get('/createdb', createDataBase)

// To create a Table
router.get('/createTable', createTable)

//get all the students
router.get('/getStudents', getStudentsList)

//create a new Student
router.post('/addStudent', createStudentValidation, createStudent)

//get a single Student by Id
router.get('/getStudentById/:id', idValidation, getStudentById)

//udpate a User by Id
router.patch('/updateStudent/:id', idValidation, updateStudent)

//delete a User by Id
router.delete('/deleteStudent/:id', idValidation, deleteStudent)

export default router;