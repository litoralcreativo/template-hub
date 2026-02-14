import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { signal, effect, untracked, inject } from '@angular/core';
import { ScreenSize } from '../models/screen-size';

export class CurrentScreenSizeService {
  private readonly displayNameMap = new Map([
    [Breakpoints.XSmall, ScreenSize.XSmall],
    [Breakpoints.Small, ScreenSize.Small],
    [Breakpoints.Medium, ScreenSize.Medium],
    [Breakpoints.Large, ScreenSize.Large],
    [Breakpoints.XLarge, ScreenSize.XLarge],
  ]);

  private readonly _currentScreenSize = signal<ScreenSize>(ScreenSize.XSmall);
  readonly currentScreenSize = this._currentScreenSize.asReadonly();

  constructor() {
    const breakpointObserver = inject(BreakpointObserver);
    effect(() => {
      const sub = breakpointObserver
        .observe([
          Breakpoints.XSmall,
          Breakpoints.Small,
          Breakpoints.Medium,
          Breakpoints.Large,
          Breakpoints.XLarge,
        ])
        .subscribe((result) => {
          for (const query of Object.keys(result.breakpoints)) {
            if (result.breakpoints[query]) {
              this._currentScreenSize.set(this.displayNameMap.get(query) ?? ScreenSize.XSmall);
            }
          }
        });
      return () => sub.unsubscribe();
    });
  }
}
