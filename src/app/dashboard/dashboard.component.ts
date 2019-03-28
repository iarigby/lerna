import { Component, OnInit, Input } from '@angular/core';
import { Library, User } from '../models';
import { library } from '../models.samples'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() user: User = {
    name: "ia",
    library: library
  };

  constructor() { 
   }

  ngOnInit() {
  }


  startStudying() {

  }
}
