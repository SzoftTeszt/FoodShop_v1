import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"products", component:ProductsComponent},
  {path:"login", component:LoginComponent},
  // {path:"", component:HomeComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"**", component:ErrorpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
