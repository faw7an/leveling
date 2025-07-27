import { Database } from 'lucide-react';
import { Pool } from 'pg';

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
});

pool.on('error',(err)=>{
    console.error('Database connection error:',err);
})

export default pool;
