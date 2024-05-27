import { Component, inject } from '@angular/core';
import { CheckboxRequiredValidator, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PropiedadService } from '../services/propiedad.service';

@Component({
  selector: 'app-propiedad-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './propiedad-form.component.html',
  styleUrl: './propiedad-form.component.css'
})
export default class PropiedadFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private propiedadService = inject(PropiedadService);

  form = this.fb.group({
    NombrePropiedad: ['',[Validators.required]],
    Ubicacion: ['',[Validators.required]],
    NumHabitaciones: ['',[Validators.required]],
    NumBanos: ['',[Validators.required]],
    valorCom: ['',[Validators.required]]

  })

  create(){
    const propiedad = this.form.value;
    this.propiedadService.create(propiedad)
    .subscribe(() => {
      this.router.navigate(['/']);
       });
  }

}
