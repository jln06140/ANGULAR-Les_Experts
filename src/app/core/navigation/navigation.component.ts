import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  // import #sidenav to use his methods
  @ViewChild('sidenav') private sidenav: MatSidenav;

  // open the sidenav on initialization
  ngOnInit() {
    this.sidenav.open();
  }
}
