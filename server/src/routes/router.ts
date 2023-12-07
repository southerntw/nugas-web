import { Router } from 'express';
import { getTodos, postTodo } from '@controllers/todoController';

const router = Router();

router.get('/todos', getTodos);
router.post('/todos', postTodo);

export default router;