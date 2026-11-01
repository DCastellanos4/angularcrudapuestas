import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Apuesta } from '../../models/apuesta';
import { ServiceApuestas } from '../../services/apuestas.service';

@Component({
  selector: 'app-apuestas-component',
  standalone: false,
  styleUrl: './apuestas-component.css',
  templateUrl: './apuestas-component.html',
})
export class ApuestasComponent implements OnInit {
  public apuestas!: Apuesta[]
  public modal: boolean;
  public apuestaModal!: Apuesta
  constructor(private _cdr: ChangeDetectorRef, private _SA: ServiceApuestas) {
    this.modal = true;
  }
  changeModal(a: Apuesta): void {
    if (this.modal) {
      this.modal = false;
    } else {
      this.modal = true;
    }
    this.apuestaModal = a;
    this._cdr.detectChanges()
  }
  async reloadApuestas(): Promise<void> {
    this.apuestas = await this._SA.getApuestasAsync();
    this.changeModal(this.apuestaModal);
    this._cdr.detectChanges();
  }
  async ngOnInit(): Promise<any> {
    this.apuestas = await this._SA.getApuestasAsync();
    this._cdr.detectChanges()
  }
}
