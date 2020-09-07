import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Personal } from './personal';


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

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  personal: Personal = new Personal();
  arrPersonal: Personal[] = [];


  displayedColumns: string[] = ['dni', 'nombre', 'area', 'cargo', 'modalidad', 'formato', 'desde', 'hasta', 'centro'];
  dataSource: MatTableDataSource<Personal>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewPersonal(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
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



}

function createNewPersonal(id: number): Personal {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    dni: id.toString(),
    nombre: name,
    area: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    cargo: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    modalidad: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    formato: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    desde: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    hasta: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    centro: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
