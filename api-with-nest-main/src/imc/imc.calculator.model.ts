export class ImcCalculatorRequest {
  weight: number;
  height: number;
}

export class ImcCalculatorResponse {
  weight: number;
  height: number;
  imc: number;
  classification: string;
}
