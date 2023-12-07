import 'module-alias/register';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from '@routes/router'

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
	console.log(`Server listening at PORT: ${PORT}`);
})