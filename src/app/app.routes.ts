import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home-component/home-component';
import { ListComponent } from './Components/list-component/list-component';

export const routes: Routes = [
    {path: "", redirectTo:"/home", pathMatch:"full"},
    {path:"home", component: HomeComponent},
    {path: "list", component: ListComponent},
    {path: "**", redirectTo: "/home", pathMatch: "full" }

 ];  
    

