import { Body, Controller, Post, HttpStatus, HttpException } from '@nestjs/common';
import { CalcService } from './calc.service';
import { CalcDto } from './calc.dto';

@Controller('calc')
export class CalcController {
  constructor(private readonly calcService: CalcService) {}

  @Post('/')
  calc(@Body() calcBody: CalcDto) {
    try {
      const result = this.calcService.calculateExpression(calcBody);
      return {
        result
      };
    } catch (error) {
      throw new HttpException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Invalid expression provided',
        error: 'Bad Request',
      }, HttpStatus.BAD_REQUEST);
    }
  }
}
