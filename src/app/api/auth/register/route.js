import pool from '@/lib/db';
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const emailVerify = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (emailVerify.rows.length > 0) {
      return Response.json(
        { message: "El correo ya está registrado" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
      [name, email, hashedPassword]
    );

    return Response.json(result.rows[0], { status: 201 });

  } catch (error) {
    console.error(error);
    return new Response("Error interno del servidor", { status: 500 });
  }
}
