import { Pool } from 'pg'

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'proyecto_ecommerce',
    password: '123',
    port: 5432,
})

export default pool