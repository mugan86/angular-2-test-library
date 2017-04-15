import {NgModule, ModuleWithProviders} from '@angular/core';
import {SampleComponent} from './sample.component';
/**
 * The Hello Library component is an example how to write components in the correct way.
 *
 * @author Anartz Mugika
 */
@NgModule({
    declarations: [SampleComponent],
    exports: [SampleComponent]
})

export class SampleModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: SampleModule, providers: []};
    }
}