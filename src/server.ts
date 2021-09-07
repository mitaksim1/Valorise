// 1. Import du framework Express
import express from "express";

// 2. Appel à Express
const app = express();

// 3. Installer le typage d'Express pour avoir l'auto-complétion de toutes les fonctonnalités : yarn add @types/express -D
app.listen(3000, () => console.log("Server is running"));