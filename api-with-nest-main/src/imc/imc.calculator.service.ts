import { Injectable } from '@nestjs/common';
import { ImcCalculatorResponse } from './imc.calculator.model';

@Injectable()
export class ImcCalculatorService {
  calculateImc(weight: number, height: number): ImcCalculatorResponse {
    if (height <= 0) {
      throw new Error('Height must be greater than zero.');
    }
    const imc = weight / (height * height);
    const classification = this.translateImc(imc);

    return {
      weight,
      height,
      imc: parseFloat(imc.toFixed(2)), // Round to 2 decimal places
      classification,
    };
  }

  translateImc(imc: number): string {
    if (imc < 18.5) {
      return 'Underweight';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Normal weight';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  }

  getTable() {
    return [
      { range: 'Underweight', min: 0, max: 18.5 },
      { range: 'Normal weight', min: 18.5, max: 24.9 },
      { range: 'Overweight', min: 25, max: 29.9 },
      { range: 'Obesity', min: 30, max: Infinity },
    ];
  }
}
