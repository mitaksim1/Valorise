import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {
    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        // Si jamais on veut changer le nom d'une tag au moment d'afficher la liste
        const tags = await tagsRepositories.find();

        return classToPlain(tags);
    }
}

export { ListTagsService }