import { Module } from '@nestjs/common';
import { ImcCalculatorService } from './imc.calculator.service';
import { ImcCalculatorController } from './imc.calculator.controller';

@Module({
  imports: [],
  controllers: [ImcCalculatorController],
  providers: [ImcCalculatorService],
})
export class ImcCalculatorModule {}
