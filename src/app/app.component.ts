import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(public router: Router) {

  }

  //TODO: will implement authorization if it is required 
  async ngOnInit() {
  }

  login() {
  }

  async logout() {

  }
}

