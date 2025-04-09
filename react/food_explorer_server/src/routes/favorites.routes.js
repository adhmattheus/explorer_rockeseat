const { Router } = require("express");

const FavoritesController = require("../controllers/FavoritesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const favoritesRoutes = Router();

const favoritesController = new FavoritesController();

favoritesRoutes.use(ensureAuthenticated);

/**
 * @swagger
 * /favorites:
 *   get:
 *     summary: Lista os pratos favoritos do usuário
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de favoritos
 *   post:
 *     summary: Adiciona um prato aos favoritos
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dish_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Favorito adicionado com sucesso
 * /favorites/{dish_id}:
 *   delete:
 *     summary: Remove um prato dos favoritos
 *     tags: [Favorites]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: dish_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Favorito removido com sucesso
 */
favoritesRoutes.get("/", favoritesController.index);
favoritesRoutes.post("/", favoritesController.create);
favoritesRoutes.delete("/:dish_id", favoritesController.delete);

module.exports = favoritesRoutes;
