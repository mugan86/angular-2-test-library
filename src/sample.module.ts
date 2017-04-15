import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { TestPipe } from './sample.pipe';


export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';


@NgModule({
  declarations: [
    SampleComponent,
    SampleDirective,
    TestPipe
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    TestPipe
  ],schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class SampleModule {}