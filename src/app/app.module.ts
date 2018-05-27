import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { HomeComponent } from './shared/components/home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { ProjectCardComponent } from './feature/components/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectCardComponent
  ],
  imports: [
    MatIconModule,
    MatCardModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
    { path: '', component: ProjectCardComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
