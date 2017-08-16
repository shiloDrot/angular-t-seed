import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CesiumComponent } from './cesium.component';
import { PointLayerComponent } from './pointLayer/point-layer.component';
import { CesiumRoutingModule } from './cesium-routing.module';
import { AngularCesiumModule } from 'angular-cesium';


@NgModule({
  imports: [CommonModule, CesiumRoutingModule, AngularCesiumModule],
  declarations: [CesiumComponent, PointLayerComponent],
  exports: [CesiumComponent, PointLayerComponent]
})
export class CesiumModule { }
