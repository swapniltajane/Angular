import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';

const routes: Routes = [
  {path: 'home', component: IndexComponent},
  {path: 'about', component: AboutComponent},
  {path: 'service', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'product', component: ProductslistComponent},
  {path: 'product/:id', component: ProductsdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
