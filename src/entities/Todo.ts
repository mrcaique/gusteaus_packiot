import { 
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

/**
 * Entity is a class that maps to a database table.
 * Maps to "Todo" table on the database.
 */
@Entity("todo")
export class Todo {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({type : 'timestamptz'})
    finished_at: Date;
}