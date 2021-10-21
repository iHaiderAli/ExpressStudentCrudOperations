import connection from '../config/db.js';
import { validationResult } from 'express-validator';

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

export const getStudents = (req, res) => {

    try {

        let sql = "SELECT * FROM student";
        connection.query(sql, (error, results) => {
            if (error) {
                throw error
            }
            console.log(results)
            res.status(200).send(results)
        })
    } catch (e) {
        res.status(400).send(e)
    }

}

export const createStudent = (req, res) => {

    try {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }

        const user = req.body;

        let sql = "INSERT INTO student SET ?";
        connection.query(sql, user, (error) => {
            if (error) {
                throw error
            }
            res.status(200).send("success")
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

        let sql = `DELETE FROM student WHERE id = ${req.params.id}`
        connection.query(sql, error => {
            if (error) {
                throw error
            }
            res.status(200).send('Students deleted successfully')
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

        connection.query('UPDATE `student` SET `first_name`=?,`last_name`=?,`age`=?,`dob`=?,`gender`=? where `id`=?', [req.body.first_name, req.body.last_name, req.body.age, req.body.dob, req.body.gender, req.params.id], function (error, results, fields) {
            if (error) throw error;
            res.status(200).send('Students updated successfully')
        });
    } catch (e) {
        res.status(400).send(e)
    }

}

export const getStudentById = (req, res) => {

    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }

        let sql = `SELECT * FROM student WHERE id = ${req.params.id}`

        connection.query(sql, (error, results) => {
            if (error) {
                throw error
            }
            console.log(results)
            res.status(200).send(results)
        })

    } catch (e) {
        res.status(400).send(e)
    }

}