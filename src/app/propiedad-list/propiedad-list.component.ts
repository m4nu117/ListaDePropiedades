import { Component, OnInit, inject } from '@angular/core';
import { PropiedadService } from '../services/propiedad.service';
import { RouterModule } from '@angular/router';
import { Propiedad } from '../model/propiedad.interface';

@Component({
  selector: 'app-propiedades-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './propiedad-list.component.html',
  styleUrls: ['./propiedad-list.component.css']
})

export default class PropiedadListComponent implements OnInit {
  private propiedadService = inject(PropiedadService);
  
  propiedades: Propiedad[] = [];

  ngOnInit(): void {
    this.propiedadService.list()
      .subscribe(propiedades => {
        this.propiedades = propiedades;
      });
  }
}
