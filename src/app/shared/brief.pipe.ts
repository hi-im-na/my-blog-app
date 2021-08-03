import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'brief'
})
export class BriefPipe implements PipeTransform {
  transform(value: string): string {
    return value.slice(0, 200) + '...';
  }
}
