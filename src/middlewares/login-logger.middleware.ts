import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoginLoggerMiddleware implements NestMiddleware {

  private logger = new Logger();

  use(req: any, res: any, next: () => void) {

    // get ip, headers, body
    const { ip, headers, body } = req;

    // get userAgent
    const userAgent = headers['user-agent'] || '';

    // get username
    const username = body?.username

    // do log
    this.logger.log(`IP:${ip}, Agent:${userAgent}, Username: ${username}`, LoginLoggerMiddleware.name)

    // when res is finish
    res.on('finish', () => {
      const statusCode = res.statusCode;
      if (statusCode === 401 || statusCode === 404 || statusCode === 405) {
        this.logger.warn(`IP:${ip}, Agent:${userAgent}, Username: ${username} - ${statusCode}`, LoginLoggerMiddleware.name)
      }
    })

    // next to endpoint
    next();
  }
}
