import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { FormsModule }   from '@angular/forms';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    RouterModule.forRoot([{ path: "login", component: LoginComponent },
    { path: "pagina1", component: Pagina1Component},
    { path: "pagina2", component: Pagina2Component },
    { path: "pagina3", component: Pagina3Component },
    { path: "", redirectTo: "login", pathMatch: "full" }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
