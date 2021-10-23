import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'students'
});
connection.connect(error => {
    if (error) {
        console.log(error);
    } else {
        console.log('Connected!:)');
    }
});
export default connection;