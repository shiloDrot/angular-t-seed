import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { CesiumModule } from './cesium/cesium.module';
import { HomeModule } from './home/home.module';
import { SemanticModule } from './semanticSample/semantic.module';
import { SharedModule } from './shared/shared.module';

import { IAppState, INITIAL_STATE, rootReducer } from './store/store';
import { CounterActions } from './app.actions';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AboutModule, CesiumModule, HomeModule, SemanticModule,
    SharedModule.forRoot(), NgReduxModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
    CounterActions],
  bootstrap: [AppComponent]

})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    // Tell @angular-redux/store about our rootReducer and our initial state.
    // It will use this to create a redux store for us and wire up all the
    // events.
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE);
  }
}
