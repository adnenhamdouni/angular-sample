import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './components/my-new-component/my-new-component.component';
import { PropertyComponent } from './components/binding/property/property.component';
import { EventComponent } from './components/binding/event/event.component';
import { TemplatingComponent } from './components/templating/templating.component';
import { StylingComponent } from './components/styling/styling.component';
import { StyleBindingComponent } from './components/styling/style-binding/style-binding.component';
import { ServicesComponent } from './components/services/services.component';
import { AnimationsComponent } from './components/animations/animations.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    PropertyComponent,
    EventComponent,
    TemplatingComponent,
    StylingComponent,
    StyleBindingComponent,
    ServicesComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
