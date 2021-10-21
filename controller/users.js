import connection from '../config/db.js';

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
    let sql = "SELECT * FROM student";
    connection.query(sql, (error, results) => {
        if (error) {
            throw error
        }
        console.log(results)
        res.send(results)
    })
}

export const createStudent = (req, res) => {

    const user = req.body;
    let sql = "INSERT INTO student SET ?";
    connection.query(sql, user, (error) => {
        if (error) {
            throw error
        }
        res.send('Student Added successfully')
    })

}

export const deleteStudent = (req, res) => {

    let sql = `DELETE FROM student WHERE id = ${req.params.id}`
    connection.query(sql, error => {
        if (error) {
            throw error
        }
        res.send('Students deleted successfully')
    })
}

export const updateStudent = (req, res) => {

    connection.query('UPDATE `student` SET `first_name`=?,`last_name`=?,`age`=?,`dob`=?,`gender`=? where `id`=?', [req.body.first_name, req.body.last_name, req.body.age, req.body.dob, req.body.gender, req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.send('Students updated successfully')
    });

}

export const getStudentById = (req, res) => {
    let sql = `SELECT * FROM student WHERE id = ${req.params.id}`

    connection.query(sql, (error, results) => {
        if (error) {
            throw error
        }
        console.log(results)
        res.send(results)
    })

}