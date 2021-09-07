// 1. Import du framework Express
import express from "express";

// 2. Appel à Express
const app = express();

// 4. Création de la première route
// Paramètres attendus : ressource/route
app.get("/test", (request, response) => {
    // Request = requêtes client
    // Response = réponse serveur
    return response.send("Hello World");
});

// 5. Création de la première route en POST
app.post("/test-post", (request, response) => {
    return response.send("Teste en POST");
});

// 3. Installer le typage d'Express pour avoir l'auto-complétion de toutes les fonctonnalités : yarn add @types/express -D
app.listen(3000, () => console.log("Server is running"));