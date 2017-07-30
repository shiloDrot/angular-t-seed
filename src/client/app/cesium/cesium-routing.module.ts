import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CesiumComponent } from './cesium.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'cesium', component: CesiumComponent }
    ])
  ],
  exports: [RouterModule]
})
export class CesiumRoutingModule { }
