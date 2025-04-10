const { Router } = require("express");

const UsersController = require ("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRoutes = Router();

const usersController = new UsersController()

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário
 *               email:
 *                 type: string
 *                 description: E-mail do usuário
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *               is_admin:
 *                 type: boolean
 *                 description: Define se o usuário é administrador (opcional, padrão é false)
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro na requisição
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   is_admin:
 *                     type: boolean
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 *   put:
 *     summary: Atualiza o perfil do usuário autenticado
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []  # Requer um token JWT válido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário
 *               email:
 *                 type: string
 *                 description: E-mail do usuário
 *               password:
 *                 type: string
 *                 description: Nova senha do usuário
 *               old_password:
 *                 type: string
 *                 description: Senha antiga do usuário (necessária para alterar a senha)
 *               is_admin:
 *                 type: boolean
 *                 description: Define se o usuário é administrador (apenas administradores podem alterar este campo)
 *     responses:
 *       200:
 *         description: Perfil do usuário atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       403:
 *         description: Permissão negada para alterar o campo 'is_admin'
 *       404:
 *         description: Usuário não encontrado
 */
usersRoutes.post("/", usersController.create);
usersRoutes.get("/", ensureAuthenticated, usersController.index);
usersRoutes.put("/", ensureAuthenticated, usersController.update);

module.exports = usersRoutes;