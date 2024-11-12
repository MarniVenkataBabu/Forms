// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { CompanyInformationComponent } from './components/company-information/company-information.component';
import { GrantsInformationComponent } from './components/grants-information/grants-information.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FormBuilder } from '@angular/forms';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormRendererComponent } from './components/form-renderer/form-renderer.component';
import { FormCreationComponent } from './components/form-creation/form-creation.component';
import { LoginFormComponent } from './components/form-creation/login-form/login-form.component';



const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'personal-information', component: PersonalInformationComponent },
  { path: 'company-information', component: CompanyInformationComponent },
  { path: 'grants-information', component: GrantsInformationComponent },
  { path: 'side-nav', component: SideNavComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: 'form-render', component: FormRendererComponent },
  { path: 'form-creation', component: FormCreationComponent },
  { path: 'login-form',component: LoginFormComponent},
  { path: '**', redirectTo: '' } // Wildcard route for invalid paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
