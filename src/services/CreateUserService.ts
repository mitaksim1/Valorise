// Dans cette classe on va mettre tout ce qui est lié à la création d'un utilisateur

// Como criamos uma classe UsersRepositories customisable, on doit faire appel à getCustomRepository
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

// Création de l'interface avec les données qui l'on veut récupérer
interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {
    async execute({ name, email, admin = false, password} : IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if (!email) {
            throw new Error("Incorrect email");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            admin, 
            password: passwordHash
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };