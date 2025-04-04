const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const DishesController = require("../controllers/DishesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const checkAdminPermission = require("../middlewares/checkAdminPermission");

const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const dishesController = new DishesController();

dishesRoutes.use(ensureAuthenticated);

/**
 * @swagger
 * /dishes:
 *   get:
 *     summary: Lista todos os pratos
 *     tags: [Dishes]
 *     security:
 *       - bearerAuth: [] # Requires a valid JWT token
 *     description: |
 *       Para autenticação, o token JWT é armazenado em um cookie HttpOnly no uso real.
 *       No entanto, para testar no Swagger, forneça o token no cabeçalho `Authorization` no formato:
 *       `Bearer <seu-token-jwt>`.
 *     responses:
 *       200:
 *         description: Lista de pratos
 *   post:
 *     summary: Cria um novo prato
 *     tags: [Dishes]
 *     security:
 *       - bearerAuth: [] # Requires a valid JWT token
 *     description: |
 *       Para autenticação, o token JWT é armazenado em um cookie HttpOnly no uso real.
 *       No entanto, para testar no Swagger, forneça o token no cabeçalho `Authorization` no formato:
 *       `Bearer <seu-token-jwt>`.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               price:
 *                 type: number
 *               image:
 *                 type: string
 *                 format: binary
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Prato criado com sucesso
 *       401:
 *         description: Usuário não autenticado
 *       403:
 *         description: Ação não autorizada (apenas administradores)
 *       500:
 *         description: Erro interno do servidor
 * /dishes/{id}:
 *   get:
 *     summary: Exibe detalhes de um prato
 *     tags: [Dishes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalhes do prato
 *   delete:
 *     summary: Exclui um prato
 *     tags: [Dishes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Prato excluído com sucesso
 */
dishesRoutes.get("/", dishesController.index);
dishesRoutes.post("/", checkAdminPermission, upload.single("image"), dishesController.create);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.delete("/:id", checkAdminPermission, dishesController.delete);
dishesRoutes.patch("/:id", checkAdminPermission, upload.single("image"), dishesController.update);

module.exports = dishesRoutes;
