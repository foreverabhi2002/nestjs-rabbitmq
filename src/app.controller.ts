import { Controller, Get, Header, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ClientProxy,
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
  // RmqRecordBuilder,
  // ClientRMQ,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private clientRMQ: ClientRMQ,
    @Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/app')
  getApp(): string {
    this.client.emit('notifications', { data: 'text' });
    console.log('Sent');
    return this.appService.getApp();
  }

  @MessagePattern('notifications')
  getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
    console.log(`Pattern: ${context.getPattern()}`, data);
  }
}
