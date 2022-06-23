import { Injectable } from '@nestjs/common'
import { helloWorld } from '@stack/core'

@Injectable()
export class AppService {
  getHello(): string {
    return helloWorld()
  }
}
