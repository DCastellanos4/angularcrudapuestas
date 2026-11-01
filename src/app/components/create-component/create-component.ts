import { Component, ElementRef, ViewChild } from '@angular/core';
import { Apuesta } from '../../models/apuesta';
import { ServiceApuestas } from '../../services/apuestas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-component',
  standalone: false,
  styleUrl: './create-component.css',
  templateUrl: './create-component.html',
})
export class CreateComponent {
  @ViewChild('usuario') usuario!: ElementRef;
  @ViewChild('resultado') resultado!: ElementRef;
  @ViewChild('fecha') fecha!: ElementRef;
  constructor(private _AS: ServiceApuestas, private _router: Router) {

  }
  async create(): Promise<any> {
    let apuesta = new Apuesta(0, this.usuario.nativeElement.value, this.resultado.nativeElement.value, this.fecha.nativeElement.value);
    await this._AS.createApuestaAsync(apuesta);
    this._router.navigate(['/apuestas'])
  }
}
