import pool from '@/lib/db';
import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";

const SECRET_KEY_ACCESS_TOKEN = new TextEncoder().encode("MY-KEY-ACCESS-T");
const SECRET_KEY_REFRESH = new TextEncoder().encode("MY-KEY-REFRESH-T");

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const verifyUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (verifyUser.rows.length === 0) {
      return Response.json({ message: "El email no existe" }, { status: 400 });
    }

    const user = verifyUser.rows[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return Response.json(
        { message: "Las credenciales son incorrectas" },
        { status: 400 }
      );
    }

    const accessToken = await generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);

    return Response.json({
      message: "Login exitoso",
      accessToken,
      refreshToken,
    });

  } catch (error) {
    console.error(error);
    return new Response("Error interno del servidor", { status: 500 });
  }
}

async function generateAccessToken(user) {
  return await new SignJWT({
    id: user.id,
    name: user.name,
    email: user.email,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("30m")
    .sign(SECRET_KEY_ACCESS_TOKEN);
}

async function generateRefreshToken(user) {
  return await new SignJWT({
    id: user.id,
    name: user.name,
    email: user.email,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(SECRET_KEY_REFRESH);
}

export async function verifyToken(token) {
  const { payload } = await jwtVerify(token, SECRET_KEY_ACCESS_TOKEN);
  return payload;
}
