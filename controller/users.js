import { v4 as uuidv4 } from "uuid";
let users = []

export const getStudents = (req, res) => {
    console.log(users)
    res.send(users)
}
export const createStudent = (req, res) => {

    const user = req.body;
    const userWithId = { ...user, id: uuidv4() }
    users.push(userWithId);

    res.send('Student Added successfully')

}

export const getStudentById = (req, res) => {

    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser)

}

export const deleteStudent = (req, res) => {

    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send('Student has been deleted')

}

export const updateStudent = (req, res) => {

    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send('Student has been updated')

}