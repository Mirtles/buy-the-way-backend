import { JsonController, Get, Param, Post, Body, HttpCode } from 'routing-controllers'
import Advert from './entity'

@JsonController()
export default class AdvertController {
  
  @Get('/adverts')
  async getAllAdverts(){
    const adverts = await Advert.find()
    return {adverts}
  }

  @Get('/adverts/:id')
  getAdvert(
    @Param('id') id: number
  ){
    return Advert.findOne(id)
  }

  @Post('/adverts')
  @HttpCode(201)
  createAdvert(
    @Body() advert: Advert
  ) {
    return advert.save()
  }

}