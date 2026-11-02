import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Equipo } from '../../models/equipo';
import { ServiceEquipos } from '../../services/equipos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit {
  constructor(private _es: ServiceEquipos, private _router: Router, private _cdr: ChangeDetectorRef) {

  }
  public equipos !: Equipo[]
  async ngOnInit(): Promise<any> {
    this.equipos = await this._es.getEquiposAsync()
    this._cdr.detectChanges()

  }
  irAEquipos(event: Event): void {
    let id = (event.target as HTMLSelectElement).value
    if (id) {
      this._router.navigate(['/equipos', id]);
    }
  }
}
