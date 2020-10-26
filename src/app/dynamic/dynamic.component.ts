import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: `
    <p>
      dynamic works!
    </p>
    <button (click)="loadSubdynamic()">load dynamic</button>
  `,
  styles: [
  ]
})
export class DynamicComponent {

  constructor(private crf: ComponentFactoryResolver,
    private view: ViewContainerRef) {

  }

  async loadSubdynamic() {
    const SubdynamicComponent = await import('../subdynamic/subdynamic.component').then(m => m.SubdynamicComponent);
    const subdynamicComponentFactory = this.crf.resolveComponentFactory(SubdynamicComponent);
    this.view.createComponent(subdynamicComponentFactory);
  }

}
