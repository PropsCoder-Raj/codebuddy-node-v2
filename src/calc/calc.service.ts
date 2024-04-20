import { Injectable } from '@nestjs/common';
import { CalcDto } from './calc.dto';

@Injectable()
export class CalcService {
  calculateExpression(calcBody: CalcDto) {
    if (eval(calcBody.expression)) {
      const tokens: string[] = calcBody.expression.split(/(\+|\*|\-|\/)/g);

      let result: number = parseInt(tokens[0]);

      for (let i: number = 1; i < tokens.length; i += 2) {
        const operator: string = tokens[i];
        const operand: number = parseInt(tokens[i + 1]);

        switch (operator) {
          case "+":
            result += operand;
            break;
          case "-":
            result -= operand;
            break;
          case "*":
            result *= operand;
            break;
          case "/":
            result /= operand;
            break;
          default:
            break;
        }
      }

      return result ? result : 0;
    }
  }
}
