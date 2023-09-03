import { DataSource } from "typeorm"
import { Todo } from "./entities/Todo"
import { CreteToDo1693547697092 } from "./database/migrations/1693547697092-CreteToDo"

// Interaction with database is only possible with a DataSource.
// TypeORM's DataSource hands the database connection settings and
// establishes initial database connection.

// Exports DataSource to be available across the application.
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user_packiot",
    password: "packiot",
    database: "tasks_db",
    entities: [Todo],
    migrations: [CreteToDo1693547697092]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

const main = async () => {
    console.time('main');
    await AppDataSource.initialize();
};

main().catch(err => {
    console.error(err);
    process.exit(1);
});

export const getDataSource = (delay = 3000): Promise<DataSource> => {
    if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (AppDataSource.isInitialized) resolve(AppDataSource);
        else reject("Failed to create connection with database");
        }, delay);
    });
};