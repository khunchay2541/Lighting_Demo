import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//ติดตั้ง firebase
import { AngularFireModule} from '@angular/fire';
import {environment } from '../environments/environment';

import {AngularFireDatabaseModule} from '@angular/fire/database'

import {FormsModule} from '@angular/forms';
import { HomeComponent } from './web/home/home.component';
import { DashbordComponent } from './web/dashbord/dashbord.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashbordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ติดตั้ง firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
