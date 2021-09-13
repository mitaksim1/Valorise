import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

// Récupère tous les compliments reçus par l'utilisateur qui est connecté à l'appli
class ListUserReceiveComplimentsService {
    async execute(user_id: string) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver: user_id
            }, 
            // Récupère toutes les informations en rapport avec les relations de ce user
            relations: ["userSender", "userReceiver", "tag"],
        });

        return compliments;
    }
}

export { ListUserReceiveComplimentsService }