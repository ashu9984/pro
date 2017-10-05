import  {Component} from '@angular/core';
import{CarCollection} from '../shared/cars';
@Component({
    templateUrl:'./car.component.html',
    selector:'app- carview'
    
})
export class CarComponent{

cars=(new CarCollection()).cars;
}