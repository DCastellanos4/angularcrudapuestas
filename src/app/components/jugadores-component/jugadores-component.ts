import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { ServiceEquipos } from '../../services/equipos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugadores-component',
  standalone: false,
  styleUrl: './jugadores-component.css',
  templateUrl: './jugadores-component.html',
})
export class JugadoresComponent implements OnInit {
  public jugadores!: Jugador[]
  public id!: number
  constructor(private _es: ServiceEquipos, private _cdr: ChangeDetectorRef, private _route: ActivatedRoute) {
  }
  async ngOnInit(): Promise<any> {
    this._route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })
    this.jugadores = await this._es.getJugadoresEquipoAsync(this.id)
    this._cdr.detectChanges()
  }
}
