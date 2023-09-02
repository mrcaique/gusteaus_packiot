import { DataSource } from "typeorm"
import { Todo } from "./entities/Todo"

// Interaction with database is only possible with a DataSource.
// TypeORM's DataSource hands the database connection settings and
// establishes initial database connection.
//
// Exports DataSource to be available across the application.
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5555,
    username: "postgres",
    password: "packiot",
    entities: [Todo]
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