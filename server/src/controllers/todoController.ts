import { Request, Response } from 'express';
import { Todo } from '@models/Todo';
import db from '@configs/db.config';

export const getTodos = async (req: Request, res: Response) => {
	try {
		const result = await db.query("SELECT * FROM tasks");
		res.status(201).json(result.rows);
	} catch(error) {
		console.log(error);
		res.status(500).json({ error: "Internal server error " });
	}
};

export const postTodo = async (req: Request, res: Response) => {
	const { id, title, description, completed } = req.body;
	try {
		const query = `INSERT INTO tasks (id, title, description, completed) VALUES ($1, $2, $3, $4) RETURNING *`
		const values = [id, title, description, completed];
		const result = await db.query(query, values);
		res.status(201).json(result.rows[0]);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal server error " });
	}
}