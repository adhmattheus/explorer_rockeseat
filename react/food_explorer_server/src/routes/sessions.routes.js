const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController");
const sessionsController = new SessionsController();

const sessionsRoutes = Router();

/**
 * @swagger
 * /sessions:
 *   post:
 *     summary: Cria uma nova sessão de usuário
 *     tags: [Sessions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sessão criada com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
sessionsRoutes.post("/", sessionsController.create);

module.exports = sessionsRoutes;
