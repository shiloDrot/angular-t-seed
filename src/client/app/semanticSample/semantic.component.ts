import { Component, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { CounterActions } from '../app.actions';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-semantic',
  templateUrl: 'semantic.component.html',
  styleUrls: ['semantic.component.css']
})
export class SemanticComponent implements OnDestroy{
  count: number;
  subscription: any;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions) {
    this.subscription = ngRedux.select<number>('count')
      .subscribe(newCount => this.count = newCount);
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
