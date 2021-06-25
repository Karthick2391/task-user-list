import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { UserFilterPipe } from 'src/app/pipes/userFilter.pipe'; 

import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UsersComponent,
		UserFilterPipe
      ],
	   imports: [
		HttpClientTestingModule,
		FormsModule
	  ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
