import { connection } from './db-configuration.js';
import { createTable } from './migrateDatabase.js';
import { generate } from './nameGenerator.js';
import http from 'http';
import url from 'url';

const hostname = '0.0.0.0';
const port = 3000;

await createTable();

const server = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url).pathname
    if(reqUrl == "/") {
      const generatedName = generate();
      await connection.query(`INSERT INTO \`people\` (\`name\`) values ('${generatedName}');`);
      const [rows] = await connection.query('SELECT * FROM `people`;');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(JSON.stringify(rows));
    }
});

server.listen(port, hostname, async () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

