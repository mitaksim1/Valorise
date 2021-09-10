import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({tag_id, user_sender, user_receiver, message}: IComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories); 
        // Pour vérifier si user_receiver est un utilisateur valide  
        const usersRepositories = getCustomRepository(UsersRepositories); 

        // Vérifie que user_sender et user_receiver sont pas les mêmes
        if (user_sender === user_receiver) {
            throw new Error("User sender and user receiver must be different");
        }
        // Vérification faite, voir s'il existe en bdd
        // findOne(user_receiver) : va chercher automatiquement l'id du user équivaut à faire findOne({id: user_receiver})
        const userReceiverExists = await usersRepositories.findOne(user_receiver);

        // Si utilisateur existe pas
        if (!userReceiverExists) {
            throw new Error("User receiver does not exists");
        }  
        
        // Si utilisateur existe, créer le compliment
        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentsRepositories.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService };