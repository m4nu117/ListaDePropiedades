import { Component, OnInit, inject } from '@angular/core';
import { CheckboxRequiredValidator, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PropiedadService } from '../services/propiedad.service';
import { Propiedad } from '../model/propiedad.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-propiedad-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './propiedad-form.component.html',
  styleUrl: './propiedad-form.component.css'
})
export default class PropiedadFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private propiedadService = inject(PropiedadService);

  form?: FormGroup;
propiedad?:Propiedad;
errors: String[] = [];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) { 
      this.propiedadService.get(parseInt(id))
      .subscribe(propiedad => {
        this.propiedad=propiedad;
        this.form= this.fb.group({
          nombrePropiedad: [propiedad.nombrePropiedad,[Validators.required]],
          ubicacion: [propiedad.ubicacion,[Validators.required]],
          numHabitaciones: [propiedad.numHabitaciones,[Validators.required]],
          numBanos: [propiedad.numBanos,[Validators.required]],
          valorCom: [propiedad.valorCom,[Validators.required]]
      
        });
      })

    } else{
      this.form = this.fb.group({
        nombrePropiedad: ['',[Validators.required]],
        ubicacion: ['',[Validators.required]],
        numHabitaciones: ['',[Validators.required]],
        numBanos: ['',[Validators.required]],
        valorCom: ['',[Validators.required]]
    
      });
    }
   
      
  }

  

  save(){
if (this.form?.invalid){
return;
}
    
    const propiedadForm = this.form!.value;
    let request: Observable<Propiedad>

    if (this.propiedad){
      request = this.propiedadService.update(this.propiedad.id, propiedadForm);
    
    } else{
      request = this.propiedadService.create(propiedadForm);
      
    }
  request
    .subscribe({
      next: () => {
        this.errors = [],
        this.router.navigate(['/'])
      },
      error: response => {
        
        this.errors = response, response.error.errors;
      }
    })
   
  }

}
