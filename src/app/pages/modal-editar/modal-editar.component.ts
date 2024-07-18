import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Processo } from '../../model/processo/processo.model';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-modal-editar',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    DatePipe,
    FormsModule,
    MatDialogActions,
    MatFormFieldModule,
    MatInputModule,
    MatDialogClose,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  templateUrl: './modal-editar.component.html',
  styleUrl: './modal-editar.component.scss'
})
export class ModalEditarComponent {

  processo!: Processo;

  constructor(
    public dialogRef: MatDialogRef<ModalEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Processo
  ) {
    this.processo = data;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}
