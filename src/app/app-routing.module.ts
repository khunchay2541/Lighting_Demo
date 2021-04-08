import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './web/dashbord/dashbord.component';
import { HomeComponent } from './web/home/home.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashbordComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
