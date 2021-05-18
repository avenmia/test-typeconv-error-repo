/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       description: A book.
 *       properties:
 *         title:
 *           type: string
 *         author:
 *           type: string
 *         genre:
 *           type: string
 */
export interface Book {
    title: string;

    author: string;

    genre: "Comedy" | "Horror" | "Romance";
}
