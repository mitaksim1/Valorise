import { Request, Response } from "express";
import { Compliment } from "../entities/Compliment";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
    async handle(request: Request, response: Response) {
        const { tag_id, user_receiver, message } = request.body;
        // En récupérant le user_id, l'utilisateur qui voudra créer un compliment sera obligé d'être connecté et authentifié
        const { user_id } = request;

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            tag_id, 
            user_sender: user_id, 
            user_receiver, 
            message
        });

        return response.json(compliment);
    }
}

export { CreateComplimentController };