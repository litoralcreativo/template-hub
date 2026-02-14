import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'hub-shell-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  template: `<header>
    <mat-toolbar>
      <ng-content select="[header-left-elements]"></ng-content>
      <span class="spacer"></span>
      <ng-content select="[header-center-elements]"></ng-content>
      <span class="spacer"></span>
      <ng-content select="[header-right-elements]"></ng-content>
    </mat-toolbar>
  </header>`,
  styles: `
    mat-toolbar {
      background: var(--mat-sys-surface-container);
      color: var(--mat-sys-on-surface);
      .spacer {
        flex: 1 1 auto;
      }
    }
  `,
})
export class ShellHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
