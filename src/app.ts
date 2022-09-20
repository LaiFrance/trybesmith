import express from 'express';
import 'express-async-errors';
import productsRouter from './routes/productsRouter';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);

app.use(errorMiddleware);

export default app;