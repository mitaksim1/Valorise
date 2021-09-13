import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

class ListTagsService {
    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        // Si jamais on veut changer le nom d'une tag au moment d'afficher la liste
        let tags = await tagsRepositories.find();

        tags = tags.map(tag => (
            { ...tag, nameCustom: `#${tag.name}` }
        ));

        return tags;
    }
}

export { ListTagsService }