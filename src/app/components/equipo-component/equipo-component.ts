import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from '../../models/equipo';
import { ServiceEquipos } from '../../services/equipos.service';

@Component({
  selector: 'app-equipo-component',
  standalone: false,
  styleUrl: './equipo-component.css',
  templateUrl: './equipo-component.html',
})
export class EquipoComponent implements OnInit {
  public idEquipo!: number
  public equipo!: Equipo
  constructor(private _route: ActivatedRoute, private _es: ServiceEquipos, private _cdr: ChangeDetectorRef) {
  }
  async ngOnInit(): Promise<any> {
    this._route.paramMap.subscribe(async params => {
      this.idEquipo = Number(params.get('id'))
      this.equipo = await this._es.getEquposPorIdAsync(this.idEquipo)
      this._cdr.detectChanges()
    })
  }
}
