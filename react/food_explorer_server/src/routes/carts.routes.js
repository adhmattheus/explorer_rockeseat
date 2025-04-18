const { Router } = require("express");

const CartsController = require("../controllers/CartsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const cartsRoutes = Router();

const cartsController = new CartsController();

cartsRoutes.use(ensureAuthenticated);

/**
 * @swagger
 * /carts:
 *   get:
 *     summary: Lista todos os carrinhos do usuário
 *     tags: [Carts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de carrinhos
 *   post:
 *     summary: Cria ou adiciona itens ao carrinho do usuário
 *     tags: [Carts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     dish_id:
 *                       type: integer
 *                     name:
 *                       type: string
 *                     quantity:
 *                       type: integer
 *     responses:
 *       201:
 *         description: Carrinho criado ou atualizado com sucesso
 * /carts/{id}:
 *   get:
 *     summary: Exibe detalhes de um carrinho
 *     tags: [Carts]
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
 *         description: Detalhes do carrinho
 *   patch:
 *     summary: Atualiza itens no carrinho
 *     tags: [Carts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do carrinho
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     dish_id:
 *                       type: integer
 *                       description: ID do prato
 *                     name:
 *                       type: string
 *                       description: Nome do prato
 *                     quantity:
 *                       type: integer
 *                       description: Quantidade do prato
 *     responses:
 *       200:
 *         description: Carrinho atualizado com sucesso
 *       404:
 *         description: Carrinho não encontrado
 *   delete:
 *     summary: Exclui um carrinho
 *     tags: [Carts]
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
 *         description: Carrinho excluído com sucesso
 */
cartsRoutes.get("/", cartsController.index);
cartsRoutes.post("/", cartsController.create);
cartsRoutes.get("/:id", cartsController.show);
cartsRoutes.patch("/:id", cartsController.update);
cartsRoutes.delete("/:id", cartsController.delete);

module.exports = cartsRoutes;
