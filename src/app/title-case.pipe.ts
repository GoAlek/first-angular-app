import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(input: string, radix: number): string {
    if (!input) {
      return '';
    } else if (input && input.length <= radix) {
      return input.toLowerCase();
    } else {
      return input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));
    }
  }

}
