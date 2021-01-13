import { Component } from '@angular/core';

import { AuthService } from './_services/auth.service';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private authService: AuthService, private userService: UserService){}

  loggedIn(){
    return this.authService.loggedIn();
  }
}
