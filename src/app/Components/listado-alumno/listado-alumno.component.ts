import { Component,OnInit } from '@angular/core';
import { Alumno } from 'src/app/Models/Alumno';
import { AlumnoService } from 'src/app/Service/alumno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-alumno',
  templateUrl: './listado-alumno.component.html',
  styleUrls: ['./listado-alumno.component.css']
})
export class ListadoAlumnoComponent implements OnInit {

  alumno:Alumno[]

  constructor(private alumnoService:AlumnoService){}


  ngOnInit(): void {
    this.alumnoService.getCliente()
    .subscribe(x=>this.alumno=x)
  }

  delete(alumno:Alumno):void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: `Seguro que desea eliminar el alumo ${alumno.id} ${alumno.nombre} `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si,eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.alumnoService.delete(alumno.id)
        .subscribe((x)=>{
          //el filter es para ya no ver el alumno eliminado en nuestra lista
          this.alumno=this.alumno.filter(cli=>cli !==alumno)
          Swal.fire('Alumno eliminado',`Alumno ${alumno.nombre} eliminado con éxito!`,'success')
        })
      } {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}

