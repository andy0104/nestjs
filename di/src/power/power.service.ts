import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  suppyPower(watts: number) {
    console.log(`Supplying ${watts} watts worth of power`);
  }
}
