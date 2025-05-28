import { NestMiddleware } from '@nestjs/common';

export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`Parâmetros:`, req.params);
    console.log(`Método:`, req.method);
    console.log(`URL:`, req.url);
    console.log(`Status:`, res.statusCode);
    console.log(`Solicitou...`);
    next();
    console.log(`Recebeu a resposta...`, req.OriginalUrl);
  }
}
