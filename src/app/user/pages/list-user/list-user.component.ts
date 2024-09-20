import { Component, OnInit } from '@angular/core';
import { User } from '../../../auth/interfaces';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{

  public users: User [] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUser().subscribe(users => this.users = users)
  }

}
