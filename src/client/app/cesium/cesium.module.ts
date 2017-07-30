import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CesiumComponent } from './cesium.component';
import { CesiumRoutingModule } from './cesium-routing.module';
import { AngularCesiumModule } from 'angular-cesium';


@NgModule({
  imports: [CommonModule, CesiumRoutingModule, AngularCesiumModule],
  declarations: [CesiumComponent],
  exports: [CesiumComponent]
})
export class CesiumModule { }
