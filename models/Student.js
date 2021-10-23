import connection from '../config/db.js';

var Student = function (student) {

    this.first_name = student.first_name;
    this.last_name = student.last_name;
    this.age = student.age;
    this.dob = student.dob;
    this.gender = student.gender;
}

Student.getAllStudents = (results) => {
    try {

        let sql = "SELECT * FROM student";
        connection.query(sql, (error, res) => {
            if (error) {
                console.log('Error in fetching students')
                results(null, error)
            } else {
                console.log('students fetched successfully')
                results(null, res)
            }
        })
    } catch (e) {
        results(null, e)
    }
}

Student.getStudentById = (id, results) => {

    try {

        let sql = `SELECT * FROM student WHERE id = ${id}`

        connection.query(sql, (error, res) => {
            if (error) {
                console.log('Error in fetching student with id')
                results(null, error)
            } else {
                console.log('student by id fetched successfully')
                results(null, res)
            }
        })

    } catch (e) {
        results(null, e)
    }

}

Student.createStuent = (studentReqData, results) => {

    try {

        let sql = "INSERT INTO student SET ?";
        connection.query(sql, studentReqData, (error, res) => {
            if (error) {
                results(null, error)
            } else {
                results(null, res)
            }
        })

    } catch (e) {
        results(null, e)
    }

}

Student.updateStudent = (id, studentReqData, results) => {

    try {

        let sql = 'UPDATE `student` SET `first_name`=?,`last_name`=?,`age`=?,`dob`=?,`gender`=? where `id`=?';
        connection.query(sql, [studentReqData.first_name, studentReqData.last_name, studentReqData.age, studentReqData.dob, studentReqData.gender, id], (error, res) => {
            if (error) {
                results(null, error)
            } else {
                results(null, res)
            }
        })

    } catch (e) {
        results(null, e)
    }

}

Student.deleteStudent = (id, results) => {

    try {

        let sql = `DELETE FROM student WHERE id = ${id}`
        connection.query(sql, (error, res) => {
            if (error) {
                results(null, error)
            } else {
                results(null, res)
            }
        })

    } catch (e) {
        results(null, e)
    }

}

export default Student;