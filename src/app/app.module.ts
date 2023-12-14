import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemRecommendedComponent } from './pages/home/components/item-recommended/item-recommended.component';
import { CardUnityComponent } from './pages/home/components/card-unity/card-unity.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { FormMarkWorkoutComponent } from './pages/home/components/form-mark-workout/form-mark-workout.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemRecommendedComponent,
    CardUnityComponent,
    FormMarkWorkoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
