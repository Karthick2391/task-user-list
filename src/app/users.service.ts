import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { } 
  
  /** Load the data from a server **/
  public getJSON(): Observable<any> {
        //return this.http.get("./assets/data/userdata.json");
        return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  
  
}
