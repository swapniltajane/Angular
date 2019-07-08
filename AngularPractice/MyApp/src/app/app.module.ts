import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { IterationsComponent } from './iterations/iterations.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { LikesdemoComponent } from './likesdemo/likesdemo.component';
import { ChangedemoComponent } from './changedemo/changedemo.component';
import { MousedemoComponent } from './mousedemo/mousedemo.component';
import { ColorChangingBlockComponent } from './color-changing-block/color-changing-block.component';
import { RegisterComponent } from './register/register.component';
import { CopypastedemoComponent } from './copypastedemo/copypastedemo.component';
import { DataComponent } from './data/data.component';
import { DatafilterComponent } from './datafilter/datafilter.component';
import { ProductdataComponent } from './productdata/productdata.component';
import { ProductfilterComponent } from './productfilter/productfilter.component';
import { EventsdemoComponent } from './eventsdemo/eventsdemo.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { SentenceCasePipe } from './SentenceCase.pipe';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { TitleCasePipe1 } from './TitleCase.pipe';
import { ProductDataService } from './product-data.service';
import { ServicedataComponent } from './servicedata/servicedata.component';
import { CaptchaService } from './captcha.service';
import { SquarePipe } from './square.pipe';
import { TemplateformComponent } from './templateform/templateform.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    IterationsComponent,
    ClassbindingComponent,
    StyleBindingComponent,
    NewLoginComponent,
    LikesdemoComponent,
    ChangedemoComponent,
    MousedemoComponent,
    ColorChangingBlockComponent,
    RegisterComponent,
    CopypastedemoComponent,
    DataComponent,
    DatafilterComponent,
    ProductdataComponent,
    ProductfilterComponent,
    EventsdemoComponent,
    LifecycleComponent,
    SentenceCasePipe,
    PipeexampleComponent,
    TitleCasePipe1,
    ServicedataComponent,
    SquarePipe,
    TemplateformComponent,
    RegisteruserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductDataService, CaptchaService],
  bootstrap: [RegisteruserComponent]
})
export class AppModule { }
