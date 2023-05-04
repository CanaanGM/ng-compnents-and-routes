import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent {
  data = [
    {
      name: "Canaan",
      age: 28,
      job: "Software engineer",
      empolyed: false
    },
    {
      name: "Dante",
      age: 40,
      job: "Devil hunter",
      empolyed: false
    },
    {
      name: "Vergil",
      age: 40,
      job: "Devil hunter",
      empolyed: false
    },
    {
      name: "Alphrad",
      age: 32,
      job: "Merc",
      empolyed: true
    },
    {
      name: "Canaan",
      age: 28,
      job: "Merc",
      empolyed: true
    },
  ]

  headers = [  // data display cofig
    {key: "name", label:"Name"},
    {key: "age", label:"age"},
    {key: "job", label:"job"},
    {key:"empolyed", label:"has a job?"}
  ]
}
