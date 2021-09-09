import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4  as uuid } from "uuid";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
class Compliment {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;
    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => User)

    @Column()
    user_receiver: string;
    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)

    @Column()
    tag_id: string;
    // Relation entre tag_id et la table Tag
    @JoinColumn({name: "tag_id"})
    // Un compliment peut appartenir qu'à un seul tag 
    // Un tag peut avoir plusieurs compliments
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Compliment };