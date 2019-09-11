import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import AdvertController from "./adverts/controller"
import setupDatabase from "./db"

const port = process.env.PORT || 4000

const app = createKoaServer({
  controllers: [AdvertController],
  cors:true,
})

setupDatabase()
  .then(_ =>
    app.listen(port, () => console.table({"server up:":`Port ${port}`}))
    )
  .catch(err=>console.error(err)) 