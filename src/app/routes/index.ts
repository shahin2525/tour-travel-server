import { Router } from 'express';
import { UserRoutes } from '../module/user/user.route';
import { TourRoutes } from '../module/tour/tour.route';

const router = Router();
const routesModule = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/tour',
    route: TourRoutes,
  },
];

routesModule.forEach((route) => router.use(route.path, route.route));

export default router;
