import { HeaderComponent } from './layout/header/header.component';
import { StoreComponent } from './pages/store/store.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', 
    component: HeaderComponent
  },
  {
    path: 'store', 
    component: StoreComponent
  },
  {
    path: "**",
    redirectTo: "",
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
