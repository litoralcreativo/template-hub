import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellComponent } from './shell/shell';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShellComponent, MatButtonModule, MatIconModule],
  template: ` <hub-shell>
    <div shell-header-center-elements>Template Hub</div>
    @if (user()) {
      <button matButton="filled" shell-header-right-elements>
        <mat-icon>login</mat-icon>Sign In
      </button>
    } @else {
      <button matIconButton shell-header-right-elements><mat-icon>account_circle</mat-icon></button>
    }
    <router-outlet shell-content></router-outlet>
  </hub-shell>`,
})
export class App {
  user = signal(1);
}
