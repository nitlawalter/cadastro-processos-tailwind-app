import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Processo } from '../../model/processo/processo.model';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { ProcessoService } from '../../services/processo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-visualizacao',
  standalone: true,
  imports: [MatDialogContent, MatDialogTitle, MatFormField, DatePipe,
    FormsModule, MatDialogActions, MatFormFieldModule, MatInputModule, MatDialogClose],
  templateUrl: './modal-visualizacao.component.html',
  styleUrl: './modal-visualizacao.component.scss'
})
export class ModalVisualizacaoComponent {

  processo!: Processo;
  downloadLink!: string;

  constructor(
    public dialogRef: MatDialogRef<ModalVisualizacaoComponent>,
    private processoService: ProcessoService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Processo
  ) {
    this.processo = data;
    this.downloadLink = `http://localhost:8080/api/v1/processos/${this.processo.id}/download`;
  }

  ngOnInit(): void {
    console.log('Modal de visualização', this.processo);
    if (this.processo.id !== undefined) {
      this.processoService.updateDataVisualizacao(this.processo.id).subscribe(
        response => {
          console.log('Data de visualização atualizada com sucesso:', response);
          this.processo = response;
          this.snackBar.open('Data de visualização do processo atualizada!', 'Fechar', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 3000,
          });
        },
        error => {
          console.error('Erro ao atualizar a data de visualização:', error);
        }
      );
    }

  }

  closeModal(): void {
    this.dialogRef.close();
  }

}
