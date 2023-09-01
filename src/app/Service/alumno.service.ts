import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../Models/Alumno';
import { Observable,catchError,throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


const urlEndPoint:string="http://localhost:8090/api/clientes"

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient,private router:Router) { }
  private httpHeader = new HttpHeaders({'Content-Type':'application/json'})


  getCliente():Observable<Alumno[]>{
    return this.http.get<Alumno[]>(urlEndPoint);
  }
  postCliente(alumno:Alumno):Observable<any>{
    return this.http.post<any>(urlEndPoint, alumno ,{headers:this.httpHeader}).pipe(
      catchError(e => {
        console.log(e.error.mensaje);
        Swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e);
      })
    )
  }
  getClientes(id:number):Observable<Alumno>{
    return this.http.get<Alumno>(`${urlEndPoint}/${id}`).pipe(
      catchError(e=>{
        console.log(e.error.mensaje);
        Swal.fire('Error al editar',e.error.mensaje,'error');
        return throwError(e);
      })
    )
  }
  update(alumno:Alumno):Observable<any>{
    return this.http.put<any>(`${urlEndPoint}/${alumno.id}`,alumno,{headers:this.httpHeader}).pipe(
      catchError(e=>{
         // this.router.navigate(['/lista'])
          console.log(e.error.mesaje);
          Swal.fire(e.error.mensaje,e.error.error,'error');
          return throwError(e);
      })
    )

  }
  delete(id:number):Observable<Alumno>{
    return this.http.delete<Alumno>(`${urlEndPoint}/${id}`,{headers:this.httpHeader}).pipe(
      catchError(e=>{
         // this.router.navigate(['/lista'])
          console.log(e.error.mesaje);
          Swal.fire(e.error.mensaje,e.error.error,'error');
          return throwError(e);
      })
    )
  }

}
