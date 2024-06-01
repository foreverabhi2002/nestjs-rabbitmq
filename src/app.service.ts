import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to Teckat Backend</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
            outline: 0;
            background: #C6FFDD;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          }

          main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;
          }
          h1 {
            color: #072b44;
          }
          a {
            color: #ffffff;
            font-size: 1.5rem;
            padding-bottom: 1rem;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <main>
          <h1>Welcome to Teckat</h1>
          <a href="/docs">Docs</a>
        </main>
      </body>
    </html>`;
  }

  getApp(): string {
    return this.configService.get('NAME');
  }

  // sseApp(data, type) {
  //   sseMapId.forEach((subject) => {
  //     subject.next({
  //       data: data,
  //       type: type,
  //     });
  //   });
  // }
}
