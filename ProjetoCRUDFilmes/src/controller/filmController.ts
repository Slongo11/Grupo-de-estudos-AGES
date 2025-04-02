import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { validateEnum } from '../utils/GenresType';
const prisma = new PrismaClient();

/**
 * Cria um filme, ao qual foi mandado as informações da requsição.
 * @param req Requisição.
 * @param res Resposta.
 * @param next Middleware.
 */
export const createFilm = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const body = req.body;
        if (!validateEnum(body.genres)) {
            res.status(404).json({ message: 'Wrong genres' });
            return;
        }
        await prisma.film.create({
            data: {
                title: body.title,
                description: body.description,
                director: body.director,
                release_year: body.releaseYear,
                genres_type: body.genres.toLocaleLowerCase(),
            },
        });
        res.status(201).json(body);
    } catch (error) {
        next(error);
    }
};

/**
 * Pega todos os filmes do banco de dados
 * @param req Requisição.
 * @param res Resposta.
 * @param next Middleware.
 */
export const getFilms = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const allFilms = await prisma.film.findMany();
        res.status(200).json(allFilms);
    } catch (error) {
        next(error);
    }
};

/**
 * Busca filme por seu id.
 * @param req Requisição.
 * @param res Resposta.
 * @param next Middleware.
 */
export const getFilmById = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const id = parseInt(req.params.id, 10);
        const film = await prisma.film.findUnique({
            where: { id: id },
        });
        if (!film) {
            res.status(404).json({ message: 'Film not found' });
            return;
        }
        res.status(200).json(film);
    } catch (error) {
        next(error);
    }
};

/**
 * Atualiza o o filme com os campos informandos pelo seu id.
 * @param req Requisição.
 * @param res Resposta.
 * @param next Middleware.
 */
export const updateFilm = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const id = parseInt(req.params.id, 10);
        let film = await prisma.film.findUnique({
            where: { id: id },
        });

        if (!film) {
            res.status(404).json({ message: 'Film not found' });
            return;
        }

        const body = req.body;
        if (body.genres && validateEnum(body.genres)) {
            res.status(404).json({ message: 'Wrong genres' });
            return;
        }

        await prisma.film.update({
            where: { id: id },
            data: {
                title: body.title ?? film.title,
                description: body.description ?? film.description,
                director: body.director ?? film.director,
                release_year: body.releaseYear ?? film.release_year,
                genres_type:
                    body.genres.toLocaleLowerCase() ?? film.genres_type,
            },
        });
        res.status(204).json('');
    } catch (error) {
        next(error);
    }
};

/**
 * Deleta um filme pelo seu id.
 * @param req Requisição.
 * @param res Resposta.
 * @param next Middleware.
 */
export const deleteFilm = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const id = parseInt(req.params.id, 10);
        let film = await prisma.film.findUnique({
            where: { id: id },
        });
        if (!film) {
            res.status(404).json({ message: 'Film not found' });
            return;
        }
        await prisma.film.delete({
            where: { id: id },
        });
        res.status(204).json('');
    } catch (error) {
        next(error);
    }
};
