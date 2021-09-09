import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";

// Repository<Tag> : on doit référencer à quelle classe le Repository doit se "lier"
@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag> {

}

export { TagsRepositories }