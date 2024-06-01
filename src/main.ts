import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.enableCors();
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:15672'],
      queue: 'email',
      queueOptions: {
        durable: false,
      },
    },
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  //   const document = SwaggerModule.createDocument(app, config);
  //   SwaggerModule.setup('docs', app, document);
  const port = (process.env.PORT ??= '3000');
  await app.listen(port, '0.0.0.0');
}
void bootstrap();
