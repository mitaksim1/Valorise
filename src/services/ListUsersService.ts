import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

// La librairie class-transformer nous permet d'exposer ou d'exclure une propeiété de notre entité

class ListUsersService {
    async execute() {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const users = await usersRepositories.find();

        return classToPlain(users);
    }
}

export { ListUsersService };