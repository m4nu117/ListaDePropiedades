import { Component, OnInit, inject } from '@angular/core';
import { PropiedadService } from '../services/propiedad.service';

@Component({
  selector: 'app-propiedad-list',
  standalone: true,
  imports: [],
  templateUrl: './propiedad-list.component.html',
  styleUrl: './propiedad-list.component.css'
})
export default class PropiedadListComponent implements OnInit{
  private propiedadService = inject(PropiedadService);

  ngOnInit(): void {
  this.propiedadService.list()
  .subscribe(contacts => {
    console.log(contacts);

  });
  }
}
