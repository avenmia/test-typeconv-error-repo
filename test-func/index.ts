import { AzureFunction, Context, HttpRequest } from "@azure/functions";

/**
 * @swagger
 *  /api/book:
 *    get:
 *      tags:
 *        - book
 *      summary: GET a book
 *      description: This endpoint is used for getting books
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                author:
 *                  type: string
 *                genre:
 *                  type: string
 *        required: true
 *      security:
 *       - x-api-key: []
 *       - x-auth-token: []
 *      responses:
 *        '200':
 *          description: Book was retrieved successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Book'
 * @param context
 * @param req
 */
const httpTrigger: AzureFunction = async function (
    context: Context,
    req: HttpRequest
): Promise<void> {
    context.log("HTTP trigger function processed a request.");
    const name = req.query.name || (req.body && req.body.name);
    const responseMessage = name
        ? "Hello, " +
          name +
          ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage,
    };
};

export default httpTrigger;
