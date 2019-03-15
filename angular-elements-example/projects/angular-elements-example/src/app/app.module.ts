import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { AppComponent } from './app.component';
import { MyGreeterComponent } from './my-greeter/my-greeter.component';

@NgModule({
  declarations: [
    AppComponent,
    // We still need to declare the component
    MyGreeterComponent
  ],
  entryComponents: [
    // The component even becoms an entry component!
    MyGreeterComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    /**
     * IMPORTANT
     *
     * There is a bug with zone.js, this fixes that.
     */
    const strategyFactory = new ElementZoneStrategyFactory(
      MyGreeterComponent,
      injector
    );
    const myGreeterContructor = createCustomElement(MyGreeterComponent, {
      injector,
      strategyFactory
    });
    customElements.define('my-greeter', myGreeterContructor);
  }
}
