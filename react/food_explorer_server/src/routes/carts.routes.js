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
 *     summary: Adiciona ou atualiza itens no carrinho do usuário
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
 *         description: Itens adicionados ou atualizados no carrinho com sucesso
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
cartsRoutes.delete("/:id", cartsController.delete);

module.exports = cartsRoutes;
