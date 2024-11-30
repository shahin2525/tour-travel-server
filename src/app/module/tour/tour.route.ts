import { Router } from 'express';
import { TourController } from './tour.controller';

const router = Router();
router.get('/:id', TourController.getSingleTour);
router.get('/schedule/:id', TourController.getNextSchedule);
router.post('/create-tour', TourController.createTour);
router.get('/', TourController.getAllTours);

export const TourRoutes = router;
