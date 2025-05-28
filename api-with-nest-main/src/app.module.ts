import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImcCalculatorModule } from './imc/imc.calculator.module';
import { ImcCalculatorController } from './imc/imc.calculator.controller';
import { UsersController } from './users/user.controller';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './users/user.module';

@Module({
  imports: [ImcCalculatorModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(UsersController);
    consumer.apply(LoggerMiddleware).forRoutes(ImcCalculatorController); // Aplica o Middleware ao ImcCalculatorController e UsersController
  }
}
