import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="loadDynamic()">load dynamic</button>
  `,
  styles: []
})
export class AppComponent {
  constructor(private crf: ComponentFactoryResolver,
    private view: ViewContainerRef) {

  }
  async loadDynamic() {
    const DynamicComponent = await import('./dynamic/dynamic.component').then(m => m.DynamicComponent);
    const dynamicComponentFactory = this.crf.resolveComponentFactory(DynamicComponent);
    const view = this.view.createComponent(dynamicComponentFactory);
  }
}
