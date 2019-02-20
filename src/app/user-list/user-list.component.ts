import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent  {

 userList = [
        {name:'user-1'},
        {name:'user-2'},
        {name:'user-3'},
        {name:'user-4'},
        {name:'user-5'},

        ]
}
