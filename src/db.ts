import { createConnection } from "typeorm";
import Advert from "./adverts/entity";

export default() =>
  createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL || 'postgres://postgres:pass@localhost:5432/postgres',
    entities: [
      Advert,
    ],
    synchronize: true,
    logging: true,
  })
  .then(_ => console.log('\nConnected to database\n'))