import { Injectable } from '@nestjs/common'
import { helloWorld } from '@stack/core'

@Injectable()
export class AppService {
  getServerInfo(): string {
    return helloWorld()
  }
}
