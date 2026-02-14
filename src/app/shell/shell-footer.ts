import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hub-shell-footer',
  template: `<footer>TemplateHub | 2026</footer>`,
  styles: `
    footer {
      padding: 5px 0;
      text-align: center;
      background: var(--mat-sys-surface-container);
      color: var(--mat-sys-on-surface);
    }
  `,
})
export class ShellFooterComponent {}
