import pool from "@/lib/db";


export async function GET() {
    try {
        const result  = await pool.query('SELECT * FROM users')
        return Response.json(result.rows)
    } catch
    (error) {
        return new Response('Error interno del servidor', { status: 500 })
    }
}