import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SemanticComponent } from './semantic.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'semantic', component: SemanticComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SemanticRoutingModule { }
