import { Router } from 'express';
import { getTodos, postTodo, putTodo } from '@controllers/todoController';

const router = Router();

router.get('/todos', getTodos);
router.post('/todos', postTodo);
router.put('/todos', putTodo);

export default router;