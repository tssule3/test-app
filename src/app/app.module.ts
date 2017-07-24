import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import {RouterModule, Routes} from '@angular/router';
import { RoutingComponent } from './routing/routing.component';
import { HttpComponent } from './http/http.component';
import { ServicesComponent } from './services/services.component';
import { CproComponent } from './cpro/cpro.component';

const myRoutes: Routes = [
  {path: 'dbcomp', component: DataBindingComponent},
  {path: 'directs', component: DirectivesComponent},
  {path: 'rout', component: RoutingComponent },
  {path: 'ht', component: HttpComponent },
  {path: 'serv', component: ServicesComponent },
  {path: 'cp', component: CproComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    RoutingComponent,
    HttpComponent,
    ServicesComponent,
    CproComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      myRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
