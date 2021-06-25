import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';

import { UsersService } from './users.service';

 
describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created User Service', () => {
    expect(service).toBeTruthy();
  });

  it('should return users', () => {
    // TODO: Write test by using `httpMock`    
   
	 
	const  userData = [ 
		{
			"id": 1,
			"name": "Leanne Graham",
			"username": "Bret",
			"email": "Sincere@april.biz",
			"address": {
			  "street": "Kulas Light",
			  "suite": "Apt. 556",
			  "city": "Gwenborough",
			  "zipcode": "92998-3874",
			  "geo": {
				"lat": "-37.3159",
				"lng": "81.1496"
			  }
			},
			"phone": "1-770-736-8031 x56442",
			"website": "hildegard.org",
			"company": {
			  "name": "Romaguera-Crona",
			  "catchPhrase": "Multi-layered client-server neural-net",
			  "bs": "harness real-time e-markets"
			}
		  }  
	]; 

		service.getJSON().subscribe((usrObj) => { 
			console.log(usrObj); 
			//expect(usrObj).toEqual(userData); 
		}); 

		const  req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');

		expect(req.request.method).toBe("GET");

		req.flush(userData);

		httpMock.verify();
		 
		 
	 
	});
	
	
	
	
	 
	
	
	
	  
});

 
 
