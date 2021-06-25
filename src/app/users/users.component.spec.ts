import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { UsersComponent } from './users.component'; 

import { UserFilterPipe } from 'src/app/pipes/userFilter.pipe';  

import { FormsModule } from '@angular/forms';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
	  imports: [HttpClientTestingModule, FormsModule], 
      declarations: [ UsersComponent, UserFilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create User Component', () => {
    expect(component).toBeTruthy();
  });
}); 