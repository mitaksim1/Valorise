import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest) {
        // Pour vérifier les données on a besoin d'accèder au UsersRepositories
        const usersRepositories = getCustomRepository(UsersRepositories);
        
        // Vérifier si email existe
        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email or password incorrect");
        }
        // Si email existe, vérifier si le mot de passe est correct
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email or passwor incorrect");
        }
        // Si correct, générer un token
        // Clé secrète avec MD5 https://www.md5hashgenerator.com/
        const token = sign({
            email: user.email
        }, "d80b1e117cb96b49a69f35ad7d77a787", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService };