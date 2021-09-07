// 1. Import de l'ORM typeorm
import "reflect-metadata";
import express from "express";

// 2. Import de la base de données
import "./database";

const app = express();

app.listen(3000, () => console.log("Server is running"));