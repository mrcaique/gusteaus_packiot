import { DataSource } from "typeorm"
import { Todo } from "./entities/Todo"

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