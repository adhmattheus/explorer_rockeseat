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

  async update(request, response) {
    const { id } = request.params;
    const { cart_items } = request.body;

    const cart = await knex("carts").where({ id }).first();

    if (!cart) {
      throw new AppError("Carrinho não encontrado.", 404);
    }

    const cartUpdate = {
      updated_at: knex.fn.now(),
    };

    const existingItems = await knex("cart_items")
      .where({ cart_id: id })
      .select("dish_id");

    const newDishIds = cart_items.map((item) => item.dish_id);
    const itemsToRemove = existingItems
      .filter((item) => !newDishIds.includes(item.dish_id))
      .map((item) => item.dish_id);

    if (itemsToRemove.length > 0) {
      await knex("cart_items")
        .where({ cart_id: id })
        .whereIn("dish_id", itemsToRemove)
        .delete();
    }

    const updatedItems = cart_items.map(({ dish_id, name, quantity }) => {
      if (existingItems.some((item) => item.dish_id === dish_id)) {
        return knex("cart_items")
          .where({ cart_id: id, dish_id })
          .update({ quantity });
      } else {
        return knex("cart_items").insert({
          cart_id: id,
          dish_id,
          name,
          quantity,
        });
      }
    });

    await Promise.all(updatedItems);

    await knex("carts").where({ id }).update(cartUpdate);

    return response.json();
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
