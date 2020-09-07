import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Usuario } from './usuario';
import { EmpresaService } from '../empresa.service';
import { map } from 'rxjs/operators';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface UserData {
  dni: string;
  personal: string;
  usuario: string;
  rol: string;
  area: string;
  estadoUsuario: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const SHAPES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarios: Usuario[] = [];
  id: number;

  displayedColumns: string[] = ['dni', 'personal', 'usuario', 'rol', 'area', 'estadoUsuario'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usuarioService: EmpresaService) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    //this.usuarioService.getUsuarios()
      //.subscribe(data => {
        //this.usuarios = data;
      //});
  }

  agregar({ value, valid }: { value: Usuario, valid: boolean }) {

  }

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    dni: id.toString(),
    personal: name,
    usuario: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    rol: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    area: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    estadoUsuario: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

