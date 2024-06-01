import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/app')
  getApp(): string {
    return this.appService.getApp();
  }

  // @Get('/sse')
  // @Public()
  // @Header('content-type', 'text/event-stream; charset=utf-8')
  // @Header('cache-control', 'no-cache')
  // @Header('connection', 'keep-alive')
  // @HttpCode(HttpStatus.OK)
  // serverSendEvents() {
  // 	const minuteInMS = 1000 * 60;
  // 	const event = 'update';
  // 	const data = { hello: 'world' };
  // 	return `retry: ${minuteInMS * 5}\nevent: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  // }

  //   @Sse('/sse')
  //   serverSentEvents(
  //     @Query('userId') userId: string,
  //     @Req() req: FastifyRequest,
  //   ): Observable<Record<string, any>> {
  //     console.log(userId, 'from sse');
  //     const sub = new Subject<Record<string, any>>();
  //     sseMapId.set(userId, sub);
  //     const minuteInMS = 1000 * 60;
  //     sub.pipe(
  //       map((payload) => {
  //         payload['id'] = userId;
  //         payload['retry'] = minuteInMS * 5;
  //         return payload;
  //       }),
  //     );
  //     req.raw.on('close', () => {
  //       sseMapId.delete(userId);
  //     });
  //     return sub;
  //   }

  // @Public()
  // @Sse('/sse')
  // serverSentEvents(
  // 	@Query('userId') userId: string,
  // 	@Query('accessToken') accessToken: string,
  // 	@Req() req: FastifyRequest,
  // ): Observable<Record<string, any>> {
  // 	console.log(userId, 'from sse');
  // 	const sub = new Subject<Record<string, any>>();
  // 	if (userId) {
  // 		sseMapId.set(userId, sub);
  // 	} else if (accessToken) {
  // 		sseMapId.set(accessToken, sub);
  // 	}
  // 	const minuteInMS = 1000 * 60;
  // 	sub.pipe(
  // 		map((payload) => {
  // 			payload['id'] = userId || accessToken;
  // 			payload['retry'] = minuteInMS * 5;
  // 			return payload;
  // 		}),
  // 	);
  // 	req.raw.on('close', () => {
  // 		if (userId) sseMapId.delete(userId);
  // 		else sseMapId.delete(accessToken);
  // 	});
  // 	return sub;
  // }
}
