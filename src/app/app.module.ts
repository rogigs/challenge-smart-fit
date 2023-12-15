import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemRecommendedComponent } from './pages/home/components/item-recommended/item-recommended.component';
import { CardUnitComponent } from './pages/home/components/card-unit/card-unit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { FormFindUnitComponent } from './pages/home/components/form-find-unit/form-find-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemRecommendedComponent,
    CardUnitComponent,
    FormFindUnitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
