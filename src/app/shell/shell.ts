import { Component, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { ShellHeaderComponent } from './shell-header';
import { ShellFooterComponent } from './shell-footer';
import { ShellContentComponent } from './shell-content';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ScreenSize } from '../shared/models/screen-size';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { CurrentScreenSizeService } from '../shared/services/current-screen-size';

@Component({
  selector: 'hub-shell',
  imports: [
    ShellHeaderComponent,
    ShellFooterComponent,
    ShellContentComponent,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbar,
  ],
  providers: [CurrentScreenSizeService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-drawer-container autosize role="main">
      <mat-drawer #drawer [class.is-small-screen]="isSmallScreen()" aria-label="Side menu">
        <mat-toolbar class="mat-drawer-toolbar">
          <button
            matIconButton
            header-left-elements
            (click)="drawer.toggle()"
            aria-label="Cerrar menú"
          >
            <mat-icon>close</mat-icon>
          </button>
        </mat-toolbar>
      </mat-drawer>
      <mat-drawer-content>
        <hub-shell-header>
          <ng-content select="[shell-header-left-elements]" header-left-elements>
            <button
              matIconButton
              header-left-elements
              (click)="drawer.toggle()"
              aria-label="Abrir menú"
            >
              <mat-icon>menu</mat-icon>
            </button>
          </ng-content>
          <ng-content select="[shell-header-center-elements]" header-center-elements>
            <span>My App</span>
          </ng-content>
          <ng-content select="[shell-header-right-elements]" header-right-elements></ng-content>
        </hub-shell-header>
        <hub-shell-content><ng-content select="[shell-content]"></ng-content></hub-shell-content>
        <hub-shell-footer></hub-shell-footer>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;

      mat-drawer-container {
        flex-grow: 1;

        mat-drawer {
          &.is-small-screen {
            width: 100%;
          }

          .mat-drawer-toolbar {
            flex-direction: row-reverse;
          }
        }

        mat-drawer-content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
      }
    }
  `,
})
export class ShellComponent {
  ScreenSize = ScreenSize;
  private readonly screenSizeService = inject(CurrentScreenSizeService);
  readonly isSmallScreen = computed(() => {
    return this.screenSizeService.currentScreenSize() <= ScreenSize.Small;
  });
}
