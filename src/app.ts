import cors from 'cors';
import express from 'express';
import { UserRoutes } from './app/module/user/user.route';
import globalErrorHandlers from './app/middlewares/globalErrorHandlers';
import notFoundRoute from './app/middlewares/notFoundRoute';
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// user routes
app.use('/api/v1/users', UserRoutes);

// global error handler
app.use(globalErrorHandlers);
// not found route
// app.use(notFoundRoute);

export default app;
