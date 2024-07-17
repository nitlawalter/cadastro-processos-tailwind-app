import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Processo } from '../../model/processo/processo.model';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modal-cadastro',
  standalone: true,
  imports: [MatDialogContent, MatDialogTitle, MatFormField, DatePipe,
    FormsModule, MatDialogActions, MatFormFieldModule, MatInputModule, MatDialogClose],
  templateUrl: './modal-cadastro.component.html',
  styleUrl: './modal-cadastro.component.scss'
})
export class ModalCadastroComponent {

  processo!: Processo;

  constructor(
    public dialogRef: MatDialogRef<ModalCadastroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Processo
  ) {
    this.processo = data;
    console.log('Dados do processo: ', data);
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}
