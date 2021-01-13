import { Component, OnInit } from '@angular/core';

import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(){
     this.userService.getUsers().subscribe(data => {
       this.users = data;
       console.log(this.users);
     });
  }

}
