import { AuthService } from './components/services/auth.service';
import { EmpresaService } from './components/empresa.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DataTablesModule } from 'angular-datatables';
import { ResponsiveExtensionComponent } from './responsive-extension/responsive-extension.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { UsuarioComponent } from './components/usuario/usuario.component';
import { PersonalComponent } from './components/personal/personal.component';
import { LoginComponent } from './components/login/login.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { EditarPersonalComponent } from './components/editar-personal/editar-personal.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    ResponsiveExtensionComponent,
    UsuarioComponent,
    PersonalComponent,
    LoginComponent,
    EditarUsuarioComponent,
    EditarPersonalComponent,
    NuevoUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [EmpresaService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
