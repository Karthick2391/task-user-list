import { Component, OnInit } from '@angular/core';
import { FilterOption } from './filter-option.interface';

import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
	
  public userList       : any    = [];
  public filterProperty : string = 'name';
  public FilterValue    : string = '';

  options: FilterOption[] = [
    {
      value: 'name',
      text: 'Name'
    },
    {
      value: 'username',
      text: 'User Name'
    },
    {
      value: 'email',
      text: 'Email'
    },
    {
      value: 'phone',
      text: 'Phone'
    },
    {
      value: 'website',
      text: 'Website'
    }
  ];

  constructor( private _userService : UsersService ) { }

  ngOnInit(){
	
	/** `subscribe` actually initiates the call to the server **/
    this._userService.getJSON().subscribe(data => {
		//console.log(data); 
		this.userList = data; 
	});
	
  }

}
