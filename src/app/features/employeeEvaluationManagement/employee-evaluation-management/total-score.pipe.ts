import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalScore',
  pure: true
})
export class TotalScorePipe implements PipeTransform {

  transform(value: any[], property: string): number {
    if (!value || value.length === 0) {
      return 0;
    }
    
    // Use the property name provided to sum the specific attribute
    return value.reduce((total, item) => total + (item[property] || 0), 0);
  }
}