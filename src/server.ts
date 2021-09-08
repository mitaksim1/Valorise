// 1. Import de l'ORM typeorm
import "reflect-metadata";
import express from "express";

import { router } from "./routes";

// 2. Import de la base de données
import "./database";

const app = express();

// Pour que Express reconaîsse les réponses envoyées en json
app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is running"));