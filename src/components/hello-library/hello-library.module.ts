import {NgModule, ModuleWithProviders} from '@angular/core';
import {HelloLibraryComponent} from './hello-library.component';
/**
 * The Hello Library component is an example how to write components in the correct way.
 *
 * @author Anartz Mugika
 */
@NgModule({
    declarations: [HelloLibraryComponent],
    exports: [HelloLibraryComponent]
})

export class HelloLibraryModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: HelloLibraryModule, providers: []};
    }
}