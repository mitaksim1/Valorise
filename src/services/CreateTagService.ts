import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {
    // Comme ici on s'attend à recevoir une seule information pas besoin de créer une interface
    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        // Tag doit avoir un nom
        if (!name) {
            throw new Error("Incorrect name");
        }

        // Tag existe?
        // findOne = SELECT * FROM tags WHERE name = 'name'
        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        });

        if (tagAlreadyExists) {
            throw new Error("Tag already exists!");
        }

        // Si tag n'existe pas, on peu la créer et l'enregistrer dans la bdd
        const tag = tagsRepositories.create({
            name
        });

        await tagsRepositories.save(tag);

        return tag;
    }
}

export { CreateTagService };