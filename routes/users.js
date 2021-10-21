import express from "express";
const router = express.Router();

import { createDataBase, createTable, getStudents, createStudent, getStudentById, deleteStudent, updateStudent } from '../controller/users.js'
import { createStudentValidation, idValidation }from '../config/validation.js';

// To create a Database
router.get('/createdb', createDataBase)

// To create a Table
router.get('/createTable', createTable)

//get all the students
router.get('/getStudents', getStudents)

//create a new Student
router.post('/addStudent', createStudentValidation, createStudent)

//get a single Student by Id
router.get('/getStudentById/:id', idValidation, getStudentById)

//delete a User by Id
router.delete('/deleteStudent/:id', idValidation, deleteStudent)

//udpate a User by Id
router.patch('/updateStudent/:id', idValidation, updateStudent)

export default router;