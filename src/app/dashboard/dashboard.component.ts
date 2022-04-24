import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  constructor() { }
  appTitle = "GitClub"
  showOverlay: boolean = false;
  opened: boolean;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
 

}
