import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalLargerScore',
  pure: true
})
export class TotalLargerScorePipe implements PipeTransform {
  transform(
    value: {
      name: string;
      score: number;
      randomValue1: number;
      randomValue2: number;
    }[]
  ): number {
    if (!value || value.length === 0) {
      return 0;
    }

    // Use the property name provided to sum the specific attribute
    return value.reduce((total, item) => total + Math.max(item.randomValue1, item.randomValue2), 0);
  }
}
