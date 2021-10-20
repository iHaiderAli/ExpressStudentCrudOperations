import express from "express";
const router = express.Router();

import { getStudents, createStudent, getStudentById, deleteStudent, updateStudent } from '../controller/users.js'

//get all the students
router.get('/', getStudents)

//create a new Student
router.post('/', createStudent)

//get a single User by Student
router.get('/:id', getStudentById)

//delete a User by Id
router.delete('/:id', deleteStudent)

//udpate a User by Id
router.patch('/:id', updateStudent)

export default router;