import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'formatDate'})
export class DateFormat implements PipeTransform {
    transform(value: String): String {
        return value.substring(0,10);
      }
    
}