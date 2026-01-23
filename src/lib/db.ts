import { Database } from 'lucide-react';
import { Pool } from 'pg';


// here i change for neon to work
const pool = new Pool ({
    connectionString: process.env.DATABASE_URL,
     ssl: {
        rejectUnauthorized: false
    },
    // Serverless-friendly connection settings
    max: 1, // Limit to 1 connection per serverless function
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0,
});

pool.on('error',(err)=>{
    console.error('Database connection error:',err);
})

export default pool;
