import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import { firstValueFrom } from 'rxjs';
require('dotenv').config()


axios.defaults.headers.common['Authorization']=process.env.AUTH_TOKEN

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService){}
  getHello(): string {
    return 'Hello World!';
  }
  

  public async getUserByUsername(username: string) {
    const url = `https://api.twitter.com/2/users/by/username/${username}`
    const { data } = await firstValueFrom(this.httpService.get(url))
    return data
  }

  public async getTweetsTimeline(username: string, max_results:number, pagination_token: string){
    try {
      let params
      if(max_results){
        params=`max_results=${max_results}&`
      }
      if(pagination_token){
        params += `pagination_token=${pagination_token}&`
      }
      const user= await this.getUserByUsername(username)
      const a = JSON.stringify(user.data)
      const b = JSON.parse(a)
      let url = `https://api.twitter.com/2/users/${b.id}/tweets`
      if(params){
        url = url+'?'+params
      }
      const { data } = await firstValueFrom(this.httpService.get(url))
      const result = JSON.parse(JSON.stringify(data.data))
      return data
    } catch (error) {
      console.log(error)
      throw new Error
    }
  }
}
