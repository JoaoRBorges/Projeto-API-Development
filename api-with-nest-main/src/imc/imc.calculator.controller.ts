import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ImcCalculatorService } from './imc.calculator.service';
import {
  ImcCalculatorRequest,
  ImcCalculatorResponse,
} from './imc.calculator.model';

@Controller('imc')
export class ImcCalculatorController {
  constructor(private readonly imcCalculatorService: ImcCalculatorService) {}

  @Post('calculate')
  calculateImc(
    @Body() imcCalcRequest: ImcCalculatorRequest,
  ): ImcCalculatorResponse {
    return this.imcCalculatorService.calculateImc(
      imcCalcRequest.weight,
      imcCalcRequest.height,
    );
  }

  @Get('translate/:imc')
  translateImc(@Param('imc') imc: number): string {
    console.log(`Translating IMC: ${imc}`);
    return this.imcCalculatorService.translateImc(imc);
  }

  @Get('table')
  getTable() {
    return this.imcCalculatorService.getTable();
  }
}
