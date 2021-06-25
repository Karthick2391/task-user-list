import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http'; 

import { SharedPipesModule } from './pipes/pipes.module';

import { UsersService } from 'src/app/users.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
	HttpClientModule,
	SharedPipesModule	
  ], 
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
