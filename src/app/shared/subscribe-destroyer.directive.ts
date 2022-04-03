import {Directive, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Directive({
  selector: '[appSubscribeDestroyer]'
})
export class SubscribeDestroyerDirective implements OnDestroy {
  public readonly isDestroyed$ = new Subject<void>();

  ngOnDestroy() {
    this.isDestroyed$.next();
    this.isDestroyed$.complete();
  }
}
