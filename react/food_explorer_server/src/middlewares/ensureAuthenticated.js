const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");
const knex = require("../database/knex");

async function ensureAuthenticated(request, response, next) {
  const token = request.cookies?.token;

  if (!token) {
    throw new AppError("JWT Token não informado", 401);
  }

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret);

    // Fetch user from the database
    const user = await knex("users").where({ id: Number(user_id) }).first();

    if (!user) {
      throw new AppError("Usuário não encontrado", 401);
    }
    console.log(request.user);
    // Populate request.user with id and is_admin
    request.user = {
      id: user.id,
      is_admin: user.is_admin,
    };

    return next();
  } catch (error) {
    throw new AppError("JWT Token inválido", 401);
  }
}

module.exports = ensureAuthenticated;
