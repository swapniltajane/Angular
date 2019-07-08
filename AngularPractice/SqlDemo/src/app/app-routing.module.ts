import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumeapiComponent } from './consumeapi/consumeapi.component';

const routes: Routes = [
  {path: 'home', component: ConsumeapiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
