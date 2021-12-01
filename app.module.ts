import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { TempConverterPipe } from './temp-converter.pipe';
import { CaseConverterPipe } from './case-converter.pipe';
import { FilterPipe } from './filter.pipe';
import { PurePipe } from './pure.pipe';
import { ImpurePipe } from './impure.pipe';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TempConverterPipe,
    CaseConverterPipe,
    FilterPipe,
    PurePipe,
    ImpurePipe,
    UpdateComponent,
    InsuranceComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    NoPageFoundComponent,
    HomeComponent,
    UserLoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
