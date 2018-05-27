import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
projects: any[];
  constructor(db: AngularFireDatabase) {
    db.list('/projects')
    .valueChanges().subscribe(projects => {
      this.projects = projects;
      console.log(projects)
    })
   }

  ngOnInit() {
  }

}
