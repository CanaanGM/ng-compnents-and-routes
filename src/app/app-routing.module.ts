import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  { // lazy loading of module
    path: 'elements', 
    loadChildren: () => import('./elements/elements.module').then( m => m.ElementsModule)
  },
  {
    path: "collections",
    loadChildren: () => import("./collections/collections-routing.module").then(x =>x.CollectionsRoutingModule)
  },
  {
    path: "views",
    loadChildren: () => import("./views/views-routing.module").then(m=> m.ViewsRoutingModule)
  },
  {
    path: "mods",
    loadChildren: () => import("./mods/mods-routing.module").then( m=> m.ModsRoutingModule) 
  },
  {path:"", component: HomeComponent },
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
