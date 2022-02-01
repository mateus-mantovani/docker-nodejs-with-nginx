import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'test'
});

export { connection };
