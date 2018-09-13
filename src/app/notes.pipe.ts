import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notes'
})
export class NotesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
