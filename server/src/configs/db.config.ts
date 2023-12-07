import 'dotenv/config'
import { Pool } from 'pg';

const database = process.env.PGDATABASE;

const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${database}`;

const pool = new Pool({
  connectionString: connectionString,
});

process.on('exit', () => {
  console.log('Closing database pool on application exit');
  pool.end();
});

export default {
  query: async (text: string, values?: any[]) => {
    const result = await pool.query(values ? { text, values } : text);
    return result;
  }
};