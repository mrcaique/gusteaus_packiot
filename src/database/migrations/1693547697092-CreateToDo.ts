import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateToDo1693547697092 implements MigrationInterface {
    /**
     * Code needed to perform the migration, in this case, create a table into
     * the database.
     * 
     * @param queryRunner - needed for a connection with the database.
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "todo",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "finished_at",
                        type: "timestamptz",
                        isNullable: true
                    }
                ]
            })
        )
    }

    /**
     * Reverts whatever up changed last time.
     * 
     * @see {@link up}
     * @param queryRunner - needed for a connection with the database.
     */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("todo")
    }
}
