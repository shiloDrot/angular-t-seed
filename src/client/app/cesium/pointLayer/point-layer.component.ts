import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AcNotification, ActionType } from 'angular-cesium';

@Component({
  moduleId: module.id,
  selector: 'point-layer',
  templateUrl: 'point-layer.component.html'
})
export class PointLayerComponent implements OnInit {

  points$: Observable<AcNotification> = new Observable<AcNotification>();
  Cesium = Cesium;
  show = true;

  constructor() {
    const pointArray = [];
    for (let i = 0; i < 1000; i++) {
      let randCenter = Cesium.Cartesian3.fromDegrees(Math.random() * 90 - 40, Math.random() * 90 - 40);
      pointArray.push({
        id: i,
        actionType: ActionType.ADD_UPDATE,
        entity: {
          position: randCenter
        }
      })
    }
    this.points$ = Observable.create(function (observable) {
      pointArray.forEach(function (point) {
        observable.next(point);
      });
    });
  }

  ngOnInit() {

  }

}
