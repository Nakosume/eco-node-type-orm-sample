import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task } from "./entities/Task"
import { User } from "./entities/User"

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'ep-proud-haze-26916324.us-east-2.aws.neon.tech', // Your host
    port: 5432, // Default PostgreSQL port
    username: 'fl0user', // Usuario || process.env.PORT
    password: 'DSVKdikms4c9', // Contraseña
    database: 'JUJU', // Nombre
    synchronize: true, // Para Dev
    logging: true, // Para Dev
    entities: [Task,User],
    migrations: [],
    subscribers: [],
    ssl: { rejectUnauthorized: false }, // Ignora el error de certificado no confiable
    name: 'default', // Asegúrate de definir el nombre de la conexión
})
