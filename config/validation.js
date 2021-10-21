import { check } from 'express-validator';
 
export const createStudentValidation = [
    check('first_name', 'first Name is requied').not().isEmpty(),
    check('last_name', 'last Name is requied').not().isEmpty(),
    check('age', 'age must be a valid number').isNumeric().isLength({ min: 2 }),
    check('dob', 'DOB is required').not().isEmpty(),
    check('gender', 'Please enter the gender').not().isEmpty()
]
 
export const idValidation = [
    check('id', 'student id must be a valid').not().isEmpty().isNumeric()
]