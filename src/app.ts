import express from 'express';
import 'express-async-errors';
import productsRouter from './routes/productsRouter';
import errorMiddleware from './middlewares/errorMiddleware';
import usersRoute from './routes/usersRoute';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRoute);

app.use(errorMiddleware);

export default app;