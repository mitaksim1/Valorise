import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
// On importe la version qui nous intéresse, v4 donne des id's aléatoires, on le renomme uuid
import { v4 as uuid } from "uuid";

// 1. Typeorm demande à savoir à quelle table cette entité fait référence, alors on lui passe en paramètre
@Entity("users")
class User {
    // 2. Définir les champs de la table 
    // 3. Définir quel type de colonne pour chaque champs en n'oubliant pas de faire l'appel lors de l'import
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };
