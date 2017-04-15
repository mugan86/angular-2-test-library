import {NgModule, ModuleWithProviders} from '@angular/core';
import {HelloLibraryComponent} from './hello-library.component';
/**
 * The Hello World component is an example how to write components in the correct way.
 *
 * @author Daniele Zurico
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