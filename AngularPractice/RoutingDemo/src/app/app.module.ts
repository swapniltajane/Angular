import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { ProductsdataService } from './productsdata.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ProductslistComponent,
    ProductsdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
