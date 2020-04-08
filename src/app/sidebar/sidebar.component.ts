import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  classAplied: Boolean = false;
  options = [];

  constructor() { 
    for (let i = 0; i < 20; i++) {
      this.options.push({
        id_menu: "menu"+i,
        title: "Menú "+i,
        url: "/dashboard"
      });    
    }
  }

  ngOnInit() {
  }

  toggleClassOpen() {
    this.classAplied = !this.classAplied;
  }
}
