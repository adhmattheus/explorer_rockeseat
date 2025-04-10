const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class CartsController {
  async create(request, response) {
    const { cart_items } = request.body;
    const user_id = request.user.id;

    let cart = await knex("carts").where({ created_by: user_id }).first();

    if (!cart) {
      const [cart_id] = await knex("carts").insert({
        created_by: user_id,
      });
      cart = { id: cart_id };
    }

    for (const { dish_id, name, quantity } of cart_items) {
      const existingItem = await knex("cart_items")
        .where({ cart_id: cart.id, dish_id })
        .first();

      if (existingItem) {
        await knex("cart_items")
          .where({ cart_id: cart.id, dish_id })
          .update({ quantity: existingItem.quantity + quantity });
      } else {
        await knex("cart_items").insert({
          cart_id: cart.id,
          dish_id,
          name,
          quantity,
        });
      }
    }

    return response.json({ id: cart.id });
  }

  async show(request, response) {
    const { id } = request.params;

    const cart = await knex("carts").where({ id }).first();
    const cart_items = await knex("cart_items").where({ cart_id: id });

    return response.json({
      ...cart,
      cart_items,
    });
  }

  async index(request, response) {
    const user_id = request.user.id;

    const carts = await knex("carts")
      .select("id", "created_at", "created_by")
      .where({ created_by: user_id })
      .orderBy("created_at", "desc");

    return response.json(carts);
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("cart_items").where({ cart_id: id }).delete();
    await knex("carts").where({ id }).delete();

    return response.json();
  }
}

module.exports = CartsController;
