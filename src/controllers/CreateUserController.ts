import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

// Le controller reçoit la requête du client (server.ts) et la repasse au service CreateUserService qui va vérifier si les informations reçus sont ok
class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, admin, password } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, email, admin, password});

        return response.json(user);
    }
}

export { CreateUserController }