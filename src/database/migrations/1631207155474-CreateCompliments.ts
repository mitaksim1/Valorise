import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompliments1631207155474 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_sender",
                        type: "uuid",
                    },
                    {
                        name: "user_receiver",
                        type: "uuid"
                    },
                    {
                        name: "tag_id",
                        type: "uuid"
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }    
                ],
                foreignKeys: [
                    {
                        name: "FKUserSenderCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_sender"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserReceiverCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_receiver"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKTagCompliments",
                        referencedTableName: "tags",
                        referencedColumnNames: ["id"],
                        columnNames: ["tag_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                ]
            })
        );

        /* 
            UNE AUTRE FAÇON DE CREER UNE FOREIGN KEY 

            Différence : en créant la FK dans la table si on fait un drop/revert tout s'efface
            Dans notre cas, comme on a besoin de la table pour que les FK existent c'est pas grave.
            Utiliser la deuxième façon dans le cas contraire.
        */

        // await queryRunner.createForeignKey(
                // Premier paramètre c'est le nom de la table où on veux insérer la FK
        //     "compliments",
                // Deuxième paramètre la méthode 
        //     new TableForeignKey({
        //         name: "FKUserSenderCompliments",
        //         referencedTableName: "users",
        //         referencedColumnNames: ["id"],
        //         columnNames: ["user_sender"],
        //         onDelete: "SET NULL",
        //         onUpdate: "SET NULL"
        //     })
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments")
    }

}
