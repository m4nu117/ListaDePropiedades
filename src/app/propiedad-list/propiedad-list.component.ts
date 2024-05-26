import { Component, OnInit, inject } from '@angular/core';
import { PropiedadService } from '../services/propiedad.service';

@Component({
  selector: 'app-propiedad-list',
  standalone: true,
  imports: [],
  templateUrl: './propiedad-list.component.html',
  styleUrls: ['./propiedad-list.component.css']
})

export default class PropiedadListComponent implements OnInit {
  private propiedadService = inject(PropiedadService);
  propiedades: any[] = [];

  ngOnInit(): void {
    this.propiedadService.list()
      .subscribe((propiedades: any) => {
        this.propiedades = propiedades;
      });
  }
}
