import { JsonController, Get } from 'routing-controllers'
import Advert from './entity'

@JsonController()
export default class AdvertController {
  @Get('/adverts')
  async getAllAdverts(){
    const adverts = await Advert.find()
    return {adverts}
  }
}