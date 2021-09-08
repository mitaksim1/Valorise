// Dans cette classe on va mettre tout ce qui est lié à la création d'un utilisateur

import { UsersRepositories } from "../repositories/UsersRepositories";

// Création de l'interface avec les données qui l'on veut récupérer
interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean
}

class CreateUserService {
    async execute({ name, email, admin} : IUserRequest) {
        const usersRepository = new UsersRepositories();

        if (!email) {
            throw new Error("Incorrect email");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = usersRepository.create({
            name,
            email,
            admin
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };