import pool from '@/lib/db';
import bcrypt from 'bcrypt';


export  async function POST(req) {
    try{
        const { name, email, password } = await req.json();

        const emailVerify = await pool.query(
            "SELECT * FROM users WHERE email = $1", [email]
        )

        if(  emailVerify.rows.length > 0 ){
            return Response.json({
                message: "El Correo ya se encuentra registrado"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const  ressult = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ( $1, $2, $3) RETURNING  id, name, email', [name, email, hashedPassword]   
        )

        return Response.json(ressult.rows[0], {status: 201})

    } catch (error) {
        return new Response('Error interno del servidor', { status: 500 })
    }
}