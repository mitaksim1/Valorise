// 1. Import de l'ORM typeorm
import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";
import { handleErrors } from "./middlewares/handleErrors";

// 2. Import de la base de données
import "./database";

const app = express();

// Pour que Express reconaîsse les réponses envoyées en json
app.use(express.json());

app.use(router);

// Middleware pour gérer les erreurs
app.use(handleErrors);

app.listen(3000, () => console.log("Server is running"));