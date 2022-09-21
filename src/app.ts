import express from 'express';
import 'express-async-errors';
import productsRouter from './routes/productsRouter';
import errorMiddleware from './middlewares/errorMiddleware';
import usersRouter from './routes/usersRouter';
import loginRouter from './routes/loginRouter';
import orderRouter from './routes/orderRouter';

const app = express();

app.use(express.json());
app.use('/orders', orderRouter);
app.use('/login', loginRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use(errorMiddleware);

export default app;