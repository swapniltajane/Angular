import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationsdemoComponent } from './animationsdemo/animationsdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationsdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AnimationsdemoComponent]
})
export class AppModule { }
