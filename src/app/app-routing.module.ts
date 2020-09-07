import { ResponsiveExtensionComponent } from './responsive-extension/responsive-extension.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { PersonalComponent } from './components/personal/personal.component';
import { EditarPersonalComponent } from './components/editar-personal/editar-personal.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { AuthGuard } from './components/guards/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuario', component: UsuarioComponent},
  { path: 'nuevoUsuario', component: NuevoUsuarioComponent },
  { path: 'usuario/editar/:id', component: EditarUsuarioComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'personal/editar', component: EditarPersonalComponent },
  { path: 'tabla', component: ResponsiveExtensionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
