import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { CompanyInformationComponent } from './components/company-information/company-information.component';
import { GrantsInformationComponent } from './components/grants-information/grants-information.component';
import { HomeComponent } from './components/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormRendererComponent } from './components/form-renderer/form-renderer.component';
import { FormCreationComponent } from './components/form-creation/form-creation.component';
import { LoginFormComponent } from './components/form-creation/login-form/login-form.component';


@NgModule({ 
  declarations: [
    AppComponent,
    PersonalInformationComponent,
    CompanyInformationComponent,
    GrantsInformationComponent,
    HomeComponent,
    SideNavComponent,
    FormBuilderComponent,
    FormRendererComponent,
    FormCreationComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    DragDropModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
