import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      console.log("login successfully");
    }, error => {
      console.log(error);
    }, () => {
      //this.router.navigate(['/members']);
    });
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodeToken = null;
    this.authService.currentUser = null;
  }

}
