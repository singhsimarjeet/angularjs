import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';



const appRoutes: Routes = [
{ path: '', component: LandingComponent },
{ path: 'home', component: LandingComponent },
{ path: 'main', component: MainComponent },
{ path: 'about', component: AboutComponent }

export const routing = RouterModule.forRoot(appRoutes);