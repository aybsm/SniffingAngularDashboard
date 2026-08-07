import { Pipe, PipeTransform } from '@angular/core';
import { maskSpName } from '../core/mask-sp-name';

@Pipe({
  name: 'maskSpName',
})
export class MaskSpNamePipe implements PipeTransform {
  transform(value: string): string {
    return maskSpName(value);
  }
}
