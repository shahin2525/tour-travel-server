import cors from 'cors';
import express from 'express';
import { UserRoutes } from './app/module/user/user.route';
import globalErrorHandlers from './app/middlewares/globalErrorHandlers';
import notFoundRoute from './app/middlewares/notFoundRoute';
import { TourRoutes } from './app/module/tour/tour.route';
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// user routes TODO add have to add index route
app.use('/api/v1/users', UserRoutes);
// tour routes
app.use('/api/v1/tours', TourRoutes);
// global error handler
app.use(globalErrorHandlers);
// not found route TODO
// app.use(notFoundRoute);

export default app;
