import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/Models/Alumno';
import { AlumnoService } from 'src/app/Service/alumno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit{

  titulo:string="Crear Alumno";

  alumno:Alumno =new Alumno;

  constructor(private alumnoService:AlumnoService,
    private activateRoute:ActivatedRoute,
    private router:Router){}


   
    ngOnInit(): void {
     this.cargarAlumno()
    }
    cargarAlumno():void{
      this.activateRoute.params.subscribe(params => {
          let id= params['id']
          if(id){
            this.alumnoService.getClientes(id)
            .subscribe((x) => this.alumno = x)
          }
        })
    }

    create():void{
    this.alumnoService.postCliente(this.alumno)
    .subscribe(json=>{
      this.router.navigate(['/lista']);
      Swal.fire('Nuevo Cliente',`${json.mensaje}: ${json.alumno.nombre}`,'success');
    })
  }
   
  update():void{
  this.alumnoService.update(this.alumno)
  .subscribe(json =>{
     this.router.navigate(['/lista'])
     Swal.fire('Alumno Actualizado',`${json.mensaje}: ${json.alumno.nombre}`,'success')
    }
  )}

  
}
