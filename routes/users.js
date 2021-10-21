import express from "express";
const router = express.Router();

import { createDataBase, createTable, getStudents, createStudent, getStudentById, deleteStudent, updateStudent } from '../controller/users.js'

// To create a Database
router.get('/createdb', createDataBase)

// To create a Taable
router.get('/createTable', createTable)

//get all the students
router.get('/getStudents', getStudents)

//create a new Student
router.post('/addStudent', createStudent)

//get a single Student by Id
router.get('/getStudentById/:id', getStudentById)

//delete a User by Id
router.delete('/deleteStudent/:id', deleteStudent)

//udpate a User by Id
router.patch('/updateStudent/:id', updateStudent)

export default router;