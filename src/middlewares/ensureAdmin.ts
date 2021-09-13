// Middleware à être utilisé dans une route
import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async  function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    // Récupérer l'id de l'utilisateur pour savoir s'il est admin ou pas
    const { user_id } = request;
    console.log(user_id);

    const usersRepositories = getCustomRepository(UsersRepositories);

    // Destructurer la variable 'user' pour récupérer directement l'information que l'on veut
    const { admin } = await usersRepositories.findOne(user_id);

    // Vérifie si l'utilisateur est admin
    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    });
}