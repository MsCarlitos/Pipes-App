import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'color'
})

export class ColorPipe implements PipeTransform {
  transform(value: number): string{
    console.log(Color[value])
    return Color[value];
  }
}
