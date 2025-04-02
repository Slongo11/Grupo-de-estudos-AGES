import { Router } from 'express';
import {
    createFilm,
    getFilms,
    getFilmById,
    updateFilm,
    deleteFilm,
} from '../controller/filmController';

const router = Router();

router.get('/', getFilms);
router.get('/:id', getFilmById);
router.post('/', createFilm);
router.patch('/:id', updateFilm);
router.delete('/:id', deleteFilm);

export default router;
