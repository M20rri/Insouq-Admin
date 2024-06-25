import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DefaultLayoutComponent } from "../../layout/default-layout/default-layout.component";


@NgModule({
    declarations: [
        ListUsersComponent,
        UserDetailsComponent,
        AddUserComponent,
        EditUserComponent
    ],
    imports: [
        CommonModule,
        UserManagementRoutingModule,
        DefaultLayoutComponent
    ]
})
export class UserManagementModule { }
