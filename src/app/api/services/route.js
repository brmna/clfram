import pool from '@/lib/db';
import { verifyToken } from '../auth/login/route';

export async function GET(req) {
    try {
        const result = await pool.query('SELECT * FROM products');

        return Response.json({
            data: result.rows,
            message: 'List of products',
        }, { status: 200 })
    } catch (error) {
        console.log('Listar products error', error);
        return new Response('Internal Error', { status: 500 });
    }
}

export async function POST(req) {
    try{
        
        try{
            const token = req.headers.get('Authorization').split(" ")[1]
            verifyToken(token)
        } catch (error) {
            console.log(error)
            return new Response('Error de autenticacion', { status: 401 })
        }
        const { name, description, price, stock } = await req.json();
        const result = await pool.query(
            'INSERT INTO products ( name, description, price, stock) VALUES (  $1 , $2, $3, $4 ) RETURNING  *', [name, description, price, stock]
        )
        return Response.json({
            data: result.rows[0],
            message: 'Product created',
        }, { status: 201 })

    } catch (error) {
        console.log('Crear product error', error);
        return new Response('Internal Error', { status: 500 });
    }
}

export async function DELETE(req) {
    try {
                try{
            const token = req.headers.get('Authorization').split(" ")[1]
            verifyToken(token)
        } catch (error) {
            console.log(error)
            return new Response('Error de autenticacion', { status: 401 })
        }
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return new Response('Missing post ID', { status: 400 });
        }

        const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);

        if (result.rowCount === 0) {
            return new Response('Post not found', { status: 404 });
        }

        return Response.json({
            data: result.rows[0],
            message: 'Post deleted successfully',
        }, { status: 200 });

    } catch (error) {
        console.log('Delete post error', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

export async function PUT(req) {
    try {
                try{
            const token = req.headers.get('Authorization').split(" ")[1]
            verifyToken(token)
        } catch (error) {
            console.log(error)
            return new Response('Error de autenticacion', { status: 401 })
        }
        const { id, title, body, image } = await req.json();

        if (!id || !title || !body) {
            return new Response('Missing required fields', { status: 400 });
        }

        const result = await pool.query(
            'UPDATE posts SET title = $1, body = $2, image = $3 WHERE id = $4 RETURNING *',
            [title, body, image || null, id]
        );

        if (result.rowCount === 0) {
            return new Response('Post not found', { status: 404 });
        }

        return Response.json({
            data: result.rows[0],
            message: 'Post updated successfully',
        }, { status: 200 });

    } catch (error) {
        console.log('Update post error', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}