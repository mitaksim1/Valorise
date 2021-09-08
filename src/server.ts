// 1. Import de l'ORM typeorm
import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";

// 2. Import de la base de données
import "./database";

const app = express();

// Pour que Express reconaîsse les réponses envoyées en json
app.use(express.json());

app.use(router);

// Middleware pour gérer les erreurs, besoin de 4 paramètres
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal ServerError",
    });
});

app.listen(3000, () => console.log("Server is running"));