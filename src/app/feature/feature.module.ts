import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { MdcCardModule } from '@angular-mdc/web';

@NgModule({
  imports: [
    CommonModule,
    MdcCardModule
  ],
  declarations: [ProjectCardComponent]
})
export class FeatureModule { }
