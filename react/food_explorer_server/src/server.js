require("express-async-errors");
require("dotenv/config");

const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");

const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const ensureAuthenticated = require("./middlewares/ensureAuthenticated");
const knex = require("./database/knex");
const routes = require("./routes");

const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Food Explorer API",
      version: "1.0.0",
      description: "API para gerenciamento de pedidos e pratos do Food Explorer",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3333}`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", // Define o formato do token
        },
      },
    },
    security: [
      {
        bearerAuth: [], // Aplica o esquema de segurança globalmente
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Caminho para os arquivos de rotas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

migrationsRun();

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // Replace with your frontend's URL
  credentials: true, // Allow cookies to be sent with requests
}));
app.use(express.json());
app.use(cookieParser());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));
app.use(routes);

app.use("/food-explorer-api-v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/me", ensureAuthenticated, async (request, response) => {
  const user = await knex("users")
    .select("id", "name", "email", "is_admin", "created_at", "updated_at")
    .where({ id: request.user.id })
    .first();

  if (!user) {
    return response.status(404).json({ message: "Usuário não encontrado" });
  }

  return response.json({ user });
});

app.post("/logout", (request, response) => {
  response.clearCookie("token");
  return response.status(200).json({ message: "Logout realizado com sucesso" });
});

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));