const { Router } = require("express");

const OrdersController = require("../controllers/OrdersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const checkAdminPermission = require("../middlewares/checkAdminPermission");

const ordersRoutes = Router();

const ordersController = new OrdersController();

ordersRoutes.use(ensureAuthenticated);

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Lista todos os pedidos
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *   post:
 *     summary: Cria um novo pedido
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *               price:
 *                 type: number
 *               payment_method:
 *                 type: string
 *               order_items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     dish_id:
 *                       type: integer
 *                     quantity:
 *                       type: integer
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 * /orders/{id}:
 *   get:
 *     summary: Exibe detalhes de um pedido
 *     tags: [Orders]
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
 *         description: Detalhes do pedido
 *   delete:
 *     summary: Exclui um pedido
 *     tags: [Orders]
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
 *         description: Pedido excluído com sucesso
 *   patch:
 *     summary: Atualiza o status de um pedido
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Status do pedido atualizado com sucesso
 * /orders/{id}/status:
 *   patch:
 *     summary: Atualiza o status de um pedido
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Novo status do pedido (valores válidos: "open", "done")
 *     responses:
 *       200:
 *         description: Status do pedido atualizado com sucesso
 *       400:
 *         description: Status inválido
 *       404:
 *         description: Pedido não encontrado
 */
ordersRoutes.get("/", ordersController.index);
ordersRoutes.post("/", ordersController.create);
ordersRoutes.get("/:id", ordersController.show);
ordersRoutes.delete("/:id", checkAdminPermission, ordersController.delete);
ordersRoutes.patch("/:id", checkAdminPermission, ordersController.update);
ordersRoutes.patch("/:id/status", checkAdminPermission, ordersController.updateStatus); // Nova rota para atualizar status

module.exports = ordersRoutes;
