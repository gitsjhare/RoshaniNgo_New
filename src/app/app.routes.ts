import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AboutRoshani} from './about/app.about.component';
import {HomeComponent} from './home/app.homecomponent';
import {Gallery} from './gallery/app.gallery.component';
import {Press} from './pressrelease/app.press.component';
import { OrganizationComponent } from './organization/app.organizationComponent';

export const RoshaniRoutes:Routes=[
{path:'',
redirectTo:'/home',
pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'about',component: AboutRoshani},
{path:'organization', component: OrganizationComponent},
{path:'gallery', component:Gallery},
{path:'PressRelease',component:Press},
{path: '*', component:HomeComponent},
{
    path:'**',
    redirectTo:'/home',
    pathMatch:'full'
}
];

export const routing:ModuleWithProviders<RouterModule>=RouterModule.forRoot(RoshaniRoutes);
