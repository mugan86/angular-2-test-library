import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'test'
})
@Injectable()
export class TestPipe implements PipeTransform {
  transform(value: any): string {
    return value.substring(0,1);
  }
}
