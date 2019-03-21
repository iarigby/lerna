import { Component, OnInit, Input } from '@angular/core';
import { Library, User } from '../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() user: User;
  library: Library;

  constructor() { 
    this.getLibrary()
   }

  ngOnInit() {

  }

  getLibrary() {
    this.library = new Library();
  }

}
