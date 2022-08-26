import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UsuarioComponent } from "../usuario/usuario.component";


const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: '**', redirectTo: 'Inicio', pathMatch:'full'},
  ];
  
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class LoginRoutingModule { }
  