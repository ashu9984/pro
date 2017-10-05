import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {HomeComponent} from './views/home.component';
import {ProfileComponent} from './views/profile.component';
import {CarComponent} from './views/car.component';
import {CarDetailComponent} from './car-detail/car-detail.component';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent,ProfileComponent,HomeComponent,CarComponent,CarDetailComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([{
      path:"home",
      component:HomeComponent
    },{
      path:'profile',
      component:ProfileComponent
    },{
      path:'car',
      component:CarComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
