import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { validateEnum } from '../utils/GenresType';
const prisma = new PrismaClient();

/**
 * Cria um review, ao qual foi mandado as informações da requsição.
 * @param req Requisição.
 * @param res Resposta.
 * @param next Middleware.
 */
export const createReview = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const body = req.body;
        if (Number(body.rating) > 10 || Number(body.rating) < 0) {
            res.status(404).json({
                message: 'The rating must be between 0 and 10',
            });
            return;
        }
        await prisma.review.create({
            data: {
                review: body.review,
                rating: body.rating,
                id_film: body.filmId,
            },
        });
        res.status(201).json(body);
    } catch (error) {
        next(error);
    }
};

/**
 * Pega todos os reviews do banco de dados
 * @param req Requisição.
 * @param res Resposta.
 * @param next Middleware.
 */
export const getReviews = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const allReviews = await prisma.review.findMany();
        res.status(200).json(allReviews);
    } catch (error) {
        next(error);
    }
};

/**
 * Busca review por seu id.
 * @param req Requisição.
 * @param res Resposta.
 * @param next Middleware.
 */
export const getReviewById = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const id = parseInt(req.params.id, 10);
        const review = await prisma.review.findUnique({
            where: { id: id },
        });
        if (!review) {
            res.status(404).json({ message: 'Review not found' });
            return;
        }
        res.status(200).json(review);
    } catch (error) {
        next(error);
    }
};

/**
 * Atualiza o o review com os campos informandos pelo seu id.
 * @param req Requisição.
 * @param res Resposta.
 * @param next Middleware.
 */
export const updateReview = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const id = parseInt(req.params.id, 10);
        let review = await prisma.review.findUnique({
            where: { id: id },
        });
        if (!review) {
            res.status(404).json({ message: 'Review not found' });
            return;
        }

        const body = req.body;

        if (Number(body.rating) > 10 || Number(body.rating) < 0) {
            res.status(404).json({
                message: 'The rating must be between 0 and 10',
            });
            return;
        }
        await prisma.review.update({
            where: { id: id },
            data: {
                review: body.review ?? review.review,
                rating: body.rating ?? review.rating,
                id_film: body.filmId ?? review.id_film,
            },
        });
        res.status(204).json('');
    } catch (error) {
        next(error);
    }
};

/**
 * Deleta um review pelo seu id.
 * @param req Requisição.
 * @param res Resposta.
 * @param next Middleware.
 */
export const deleteReview = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const id = parseInt(req.params.id, 10);
        let review = await prisma.review.findUnique({
            where: { id: id },
        });
        if (!review) {
            res.status(404).json({ message: 'Review not found' });
            return;
        }
        await prisma.review.delete({
            where: { id: id },
        });
        res.status(204).json('');
    } catch (error) {
        next(error);
    }
};
