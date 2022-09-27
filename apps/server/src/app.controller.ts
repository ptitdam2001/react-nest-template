import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping')
  ping(): { message: string | object } {
    return {
      message: this.appService.getServerInfo(),
    }
  }
}
