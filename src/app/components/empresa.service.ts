import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; //agregado para la conexion con el backend
import { Usuario } from './usuario/usuario';

//Importando los componentes



@Injectable()
export class EmpresaService {

  private urlEndPointLogin: string = "http://localhost:8080/sicaper/api/usuario/validarUsuario";
  private urlEndPointUsuarios: string = "http://localhost:8080/sicaper/api/usuario/listarUsuario";




  constructor(private http: HttpClient) { //agregado para la conexion con el backend
  }








}
