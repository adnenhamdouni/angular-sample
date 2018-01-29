import { AnimationsComponent } from './components/animations/animations.component';
import { ServicesComponent } from './components/services/services.component';
import { StyleBindingComponent } from './components/styling/style-binding/style-binding.component';
import { StylingComponent } from './components/styling/styling.component';
import { TemplatingComponent } from './components/templating/templating.component';
import { EventComponent } from './components/binding/event/event.component';
import { PropertyComponent } from './components/binding/property/property.component';
import { MyNewComponentComponent } from './components/my-new-component/my-new-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MyNewComponentComponent
  },
  {
    path: 'templating',
    component: TemplatingComponent
  },
  {
    path: 'binding-property',
    component: PropertyComponent
  },
  {
    path: 'binding-event',
    component: EventComponent
  },
  {
    path: 'styling-class-binding',
    component: StylingComponent
  },
  {
    path: 'styling-style-binding',
    component: StyleBindingComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'animations',
    component: AnimationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
