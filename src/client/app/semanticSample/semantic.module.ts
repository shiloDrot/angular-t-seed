import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuiModule} from 'ng2-semantic-ui';
import { SemanticComponent } from './semantic.component';
import { SemanticRoutingModule } from './semantic-routing.module';

@NgModule({
  imports: [CommonModule, SemanticRoutingModule, SuiModule],
  declarations: [SemanticComponent],
  exports: [SemanticComponent]
})
export class SemanticModule { }
