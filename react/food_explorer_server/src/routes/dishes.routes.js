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
 *   post:
 *     summary: Cria um novo prato
 *     tags: [Dishes]
 *     security:
 *       - bearerAuth: [] # Requires a valid JWT token
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Spaguetti Gambe"
 *               description:
 *                 type: string
 *                 example: "Massa fresca com camarões e pesto"
 *               category:
 *                 type: string
 *                 example: "meals"
 *               price:
 *                 type: number
 *                 example: 78.96
 *               image:
 *                 type: string
 *                 format: binary
 *               ingredients:
 *                 type: string
 *                 description: Ingredientes do prato, separados por vírgula.
 *                 example: "Massa fresca, Camarões, Pesto"
 *     responses:
 *       201:
 *         description: Prato criado com sucesso
 * 
 *   get:
 *     summary: Lista todos os pratos com seus ingredientes
 *     tags: [Dishes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Termo de busca para filtrar pratos pelo nome, descrição ou ingredientes
 *     responses:
 *       200:
 *         description: Lista de pratos
 */
dishesRoutes.get("/", dishesController.index);

dishesRoutes.post("/", checkAdminPermission, upload.single("image"), dishesController.create);

/**
 * @swagger
 * /dishes/{id}:
 *   get:
 *     summary: Obtém detalhes de um prato pelo ID
 *     tags: [Dishes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do prato
 *     responses:
 *       200:
 *         description: Dados do prato
 *       404:
 *         description: Prato não encontrado
 */
dishesRoutes.get("/:id", dishesController.show);

/**
 * @swagger
 * /dishes/{id}:
 *   delete:
 *     summary: Exclui um prato pelo ID
 *     tags: [Dishes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do prato a ser excluído
 *     responses:
 *       204:
 *         description: Prato excluído com sucesso
 *       404:
 *         description: Prato não encontrado
 */
dishesRoutes.delete("/:id", checkAdminPermission, dishesController.delete);

/**
 * @swagger
 * /dishes/{id}:
 *   patch:
 *     summary: Atualiza um prato pelo ID
 *     tags: [Dishes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do prato a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do prato
 *               description:
 *                 type: string
 *                 description: Descrição do prato
 *               category:
 *                 type: string
 *                 description: Categoria do prato
 *               price:
 *                 type: number
 *                 description: Preço do prato
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Imagem do prato
 *               ingredients:
 *                 type: string
 *                 description: Ingredientes do prato, separados por vírgula
 *     responses:
 *       200:
 *         description: Prato atualizado com sucesso
 *       404:
 *         description: Prato não encontrado
 */
dishesRoutes.patch("/:id", checkAdminPermission, upload.single("image"), dishesController.update);

module.exports = dishesRoutes;
