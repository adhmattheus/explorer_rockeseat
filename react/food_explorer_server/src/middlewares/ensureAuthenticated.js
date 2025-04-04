const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");
const knex = require("../database/knex");

async function ensureAuthenticated(request, _response, next) {
  const authHeader = request.headers['authorization'];
  const tokenFromHeader = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
  const tokenFromCookie = request.cookies?.token;

  const token = tokenFromHeader || tokenFromCookie;

  if (!token) {
    throw new AppError("JWT Token não informado", 401);
  }

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret);
    const user = await knex("users").where({ id: user_id }).first();

    if (!user) {
      throw new AppError("Usuário não encontrado", 401);
    }

    request.user = {
      id: user.id,
      is_admin: user.is_admin,
    };

    next();
  } catch (error) {
    console.error("Erro ao verificar JWT:", error);
    throw new AppError("JWT Token inválido", 401);
  }
}

module.exports = ensureAuthenticated;
