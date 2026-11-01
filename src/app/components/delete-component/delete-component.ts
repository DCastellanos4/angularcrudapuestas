import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Apuesta } from '../../models/apuesta';
import { ServiceApuestas } from '../../services/apuestas.service';

@Component({
  selector: 'app-delete-component',
  standalone: false,
  styleUrl: './delete-component.css',
  templateUrl: './delete-component.html',
})
export class DeleteComponent {
  constructor(private _AS: ServiceApuestas, private _cdr: ChangeDetectorRef) { }
  @Output() closeModal = new EventEmitter<void>();
  @Output() deleted = new EventEmitter<void>();
  @Input() apuesta!: Apuesta;
  cancel(): void {
    this.closeModal.emit();
  }
  async eliminar(id: number): Promise<any> {
    console.log(this.apuesta.idApuesta);
    await this._AS.deleteApuestasAsync(id)
    console.log("Eliminado");
    this.deleted.emit();
  }
}
