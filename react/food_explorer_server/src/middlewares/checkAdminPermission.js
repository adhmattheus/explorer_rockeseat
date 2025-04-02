const AppError = require("../utils/AppError");

async function checkAdminPermission(request, response, next) {
  const { is_admin } = request.user;

  if (!is_admin) {
    throw new AppError(
      "Apenas usuários administradores podem realizar esta ação.",
      403
    );
  }

  return next();
}

module.exports = checkAdminPermission;
