import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hub-shell-content',
  template: `<main><ng-content></ng-content></main>`,
  styles: `
    :host {
      flex-grow: 1;
      padding: 0 1rem;
    }
  `,
})
export class ShellContentComponent {}
