import { NgModule } from '@angular/core'; 

import { UserFilterPipe } from './userFilter.pipe'; 

@NgModule({
    declarations: [ 
		UserFilterPipe
    ],
    imports     : [],
    exports     : [ 
		UserFilterPipe
    ]
})
export class SharedPipesModule
{
}
