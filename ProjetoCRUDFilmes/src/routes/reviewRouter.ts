import { Router } from 'express';
import {
    createReview,
    getReviews,
    getReviewById,
    updateReview,
    deleteReview,
} from '../controller/reviewController';

const router = Router();

router.get('/', getReviews);
router.get('/:id', getReviewById);
router.post('/', createReview);
router.patch('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;
