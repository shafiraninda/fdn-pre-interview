import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user/:username')
  public async getUser(@Param('username') username: string) {
    return this.appService.getUserByUsername(username);
  }

  @Get('/timeline/tweets/:username')
  public async getTimeline(
    @Param('username') username: string,
    @Query('max_results') max_results?: number,
    @Query('pagination_token') pagination_token?: string
    ) {
    const data = await this.appService.getTweetsTimeline(username, max_results, pagination_token);
    return data
  }
}
