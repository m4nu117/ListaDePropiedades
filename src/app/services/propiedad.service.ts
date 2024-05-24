import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  private http = inject (HttpClient)
  
  list(){
   return this.http.get('http://localhost:8080/api/RegisterProperty');

  }
  get(id: number) {
    return this.http.get('http://localhost:8080/api/RegisterProperty/${id}')
  }
  create (propiedad: any) {
    return this.http.post('http://localhost:8080/api/RegisterProperty', propiedad)
  }
  update (id:number, propiedad: any) {
    return this.http.put('http://localhost:8080/api/RegisterProperty/${id}', propiedad)
  }
  delete (id:number, propiedad: any) {
    return this.http.delete('http://localhost:8080/api/RegisterProperty/${id}');
  }
}
