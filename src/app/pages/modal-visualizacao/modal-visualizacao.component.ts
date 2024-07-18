import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Processo } from '../../model/processo/processo.model';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { ProcessoService } from '../../services/processo.service';

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

  constructor(
    public dialogRef: MatDialogRef<ModalVisualizacaoComponent>,
    private processoService: ProcessoService,
    @Inject(MAT_DIALOG_DATA) public data: Processo
  ) {
    this.processo = data;
    console.log('Dados do processo: ', data);
  }

  ngOnInit(): void {
    console.log('Modal de visualização', this.processo);
    if (this.processo.id !== undefined) {
      this.processoService.updateDataVisualizacao(this.processo.id).subscribe(
        response => {
          console.log('Data de visualização atualizada com sucesso:', response);
          this.processo = response;
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
