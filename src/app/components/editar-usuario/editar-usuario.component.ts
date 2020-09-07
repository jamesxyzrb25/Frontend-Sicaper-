import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html'
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarios: Usuario[] = [];

  id: number;

  constructor(private usuarioService: EmpresaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.id = this.route.snapshot.params['id'];
    //this.usuarioService.getUsuarioId(this.id).subscribe(usuario => {
      //this.usuario = usuario;
    //})
  }

  eliminar() {
    //if (confirm('Seguro que desea eliminar el empleado')) {
      //this.usuarioService.borrarUsuario(this.usuario)
        //.subscribe(data => {
          //this.usuario = data;
          //console.log(data);
          //alert("Se eliminó el usuario");
        //})
      //this.router.navigate(['/usuarios']);
    //}
  }

  actualizar() {
    //console.log(this.usuario + ' desde el editar-empleado.actualizar');
    //this.usuarioService.actualizarUsuario(this.usuario)
      //.subscribe(data => {
        //this.usuario = data;
        //console.log(data);
        //alert("Se actualizó el usuario con éxito");


      //});
    //this.router.navigate(['/usuario']);
  }

}

