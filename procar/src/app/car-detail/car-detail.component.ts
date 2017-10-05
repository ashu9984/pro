 import {Component,Input} from '@angular/core'
 @Component({
     templateUrl:'car-detail.component.html',
     selector:'app-car-detail'
     
 })
 export class CarDetailComponent{
    // <app-car-detail></app-car-detail>
     @Input()car
     
 }