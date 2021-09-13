// Import des types de donnés attendus par les champs
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

// Import de class-transformer
import { Expose } from "class-transformer";

// Import de l'id uuid
import { v4 as uuid } from "uuid";

@Entity("tags")
class Tag {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Expose({name: "name_custom"})
    nameCustom(): string {
        return `#${this.name}`;
    }
 
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Tag }