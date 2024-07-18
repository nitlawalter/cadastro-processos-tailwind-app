import { LocalidadeService } from './../../services/localidade.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Processo } from '../../model/processo/processo.model';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { ProcessoService } from '../../services/processo.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-modal-cadastro',
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
    MatSelectModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ReactiveFormsModule
  ],
  templateUrl: './modal-cadastro.component.html',
  styleUrl: './modal-cadastro.component.scss'
})
export class ModalCadastroComponent {

  formProcesso!: FormGroup;
  estados: any[] = [];
  municipios: any[] = [];

  constructor(
    private localidadeService: LocalidadeService,
    private processoService: ProcessoService,
    public dialogRef: MatDialogRef<ModalCadastroComponent>,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.buildForm();
    this.loadEstados();
  }

  buildForm() {
    this.formProcesso = this.formBuilder.group({
      npu: ['', [Validators.required]],
      dataCadastro: ['', Validators.required],
      municipio: ['', Validators.required],
      uf: ['', Validators.required]
    });
  }

  loadEstados(): void {
    this.localidadeService.getEstados().subscribe(data => {
      this.estados = data;
      console.log(this.estados);
    });
  }

  onEstadoChange(estadoSigla: string): void {
    this.loadMunicipios(estadoSigla);
  }

  loadMunicipios(uf: string): void {
    this.localidadeService.getMunicipios(uf).subscribe(data => {
      this.municipios = data;
      console.log(this.municipios);
    });
  }

  formatNpu(npu: string): string {
    return npu.replace(/(\d{7})(\d{2})(\d{4})(\d)(\d{2})(\d{4})/, '$1-$2.$3.$4.$5.$6');
  }

  saveProcesso(): void {
    if (this.formProcesso.valid) {
      const processo = this.formProcesso.value;
      processo.npu = this.formatNpu(processo.npu);
      this.processoService.createProcesso(processo).subscribe(
        response => {
          console.log('Processo salvo com sucesso:', response);
          this.snackBar.open('Cadastro realizado com sucesso!', 'Fechar', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 3000,
          });
          this.dialogRef.close(true);
        },
        error => {
          console.error('Erro ao salvar o processo:', error);
          this.snackBar.open('Erro ao salvar o processo', 'Fechar', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 3000,
          });
        }
      );
    }
  }


  closeModal(): void {
    this.dialogRef.close(false);
  }

}
