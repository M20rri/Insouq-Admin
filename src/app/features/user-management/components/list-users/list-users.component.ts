import { Component, OnInit } from '@angular/core';
import { UserManagementService } from "../../user-management.service";
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent implements OnInit {
  users: User[] = []
  constructor(private _userMangementService: UserManagementService) {}

  ngOnInit(): void {
    this._userMangementService.getUsers().subscribe((res)=>{
      console.log(res);
    })

    this.users=[{email:"test@test.com",id:"3aa2beb3-859c-4469-bc1a-433533e56200",name:"asd"}]
  }

}
