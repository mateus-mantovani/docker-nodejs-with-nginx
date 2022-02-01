import { connection } from './db-configuration.js';

async function createTable() {
  console.log("CREATING PEOPLE TABLE IF NOT EXISTS...");
  const sql = "CREATE TABLE IF NOT EXISTS people (name VARCHAR(255));";
  await connection.execute(sql);
}

export { createTable };
