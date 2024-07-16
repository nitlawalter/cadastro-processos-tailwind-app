import { Component, Inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Processo } from '../../model/processo/processo.model';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-modal-visualizacao',
  standalone: true,
  imports: [MatCard, MatDialogContent, MatDialogTitle, MatFormField, MatDividerModule,
    FormsModule, MatDialogActions, MatFormFieldModule, MatInputModule, MatDialogClose],
  templateUrl: './modal-visualizacao.component.html',
  styleUrl: './modal-visualizacao.component.scss'
})
export class ModalVisualizacaoComponent {

  processo!: Processo;

  constructor(
    public dialogRef: MatDialogRef<ModalVisualizacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Processo
  ) {
    this.processo = data;
    console.log('Dados do processo: ', data);
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}
