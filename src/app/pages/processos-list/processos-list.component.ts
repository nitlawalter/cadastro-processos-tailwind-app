import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

import {MatPaginator, MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ProcessoService } from '../../services/processo.service';
import { ModalVisualizacaoComponent } from '../modal-visualizacao/modal-visualizacao.component';
import { DatePipe } from '@angular/common';
import { ModalCadastroComponent } from '../modal-cadastro/modal-cadastro.component';
import { ModalEditarComponent } from '../modal-editar/modal-editar.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-processos-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatCardModule, MatIcon, DatePipe],
  templateUrl: './processos-list.component.html',
  styleUrl: './processos-list.component.scss',
  providers: [
    { provide: MatPaginatorIntl, useValue: getPortuguesePaginatorIntl() }
  ]
})
export class ProcessosListComponent implements AfterViewInit {
  displayedColumns: string[] = ['npu', 'dataCadastro', 'uf', 'acoes'];
  processos =  new MatTableDataSource<any>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null = null;

  constructor(
    private processoService: ProcessoService,
    public dialog: MatDialog,
    private paginatorIntl: MatPaginatorIntl,
    private snackBar: MatSnackBar,
  ) {
    this.paginatorIntl = getPortuguesePaginatorIntl();
  }

  ngAfterViewInit(): void {
    this.processos.paginator = this.paginator;
  }

  ngOnInit() {
    this.loadProcessos();
  }

  editar(obj: any) {
    this.dialog.open(ModalCadastroComponent,
      {
        data: {processo: obj},
        width: '900px',
        height: '700px'
      }
    )
  }

  deletar(obj: any) {
    if (confirm('Tem certeza que deseja deletar este processo?')) {
      this.processoService.deleteProcesso(obj.id).subscribe(
        () => {
          this.snackBar.open('Cadastro deletado com sucesso!', 'Fechar', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 3000,
          });
          this.loadProcessos();
        },
        error => {
          console.error('Erro ao deletar o processo:', error);
          this.snackBar.open('Erro ao deletar o processo', 'Fechar', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 3000,
          });
        }
      );
    }
  }

  visualizar(obj: any) {
    this.dialog.open(ModalVisualizacaoComponent,
      {
        data: obj,
        width: '900px',
        height: '700px'
      }
    );
  }

  loadProcessos(): void {
    this.processoService.getProcessos().subscribe(data => {
      this.processos = new MatTableDataSource(data);
      this.processos.paginator = this.paginator
    });
  }

  openModalCadastro() {
    const dialogRef = this.dialog.open(ModalCadastroComponent,
      {
        width: '900px',
        height: '700px'
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.loadProcessos();
      }
    });
  }

}

export function getPortuguesePaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Itens por página:';
  paginatorIntl.nextPageLabel = 'Próxima página';
  paginatorIntl.previousPageLabel = 'Página anterior';
  paginatorIntl.firstPageLabel = 'Primeira página';
  paginatorIntl.lastPageLabel = 'Última página';

  paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length}`;
    }
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };

  return paginatorIntl;
}

export interface Processo {
  npu: string;
  dataCadastro: string;
  uf: string;
}

const ELEMENT_DATA: Processo[] = [
  {npu: '1111111-11.1111.1.11.1111', dataCadastro: '15/07/2024', uf: 'PB'},
  {npu: '1111111-11.1111.1.11.1111', dataCadastro: '15/07/2024', uf: 'PB'},
  {npu: '1111111-11.1111.1.11.1111', dataCadastro: '15/07/2024', uf: 'PB'},
  {npu: '1111111-11.1111.1.11.1111', dataCadastro: '15/07/2024', uf: 'PB'},
  {npu: '1111111-11.1111.1.11.1111', dataCadastro: '15/07/2024', uf: 'PB'},
  {npu: '1111111-11.1111.1.11.1111', dataCadastro: '15/07/2024', uf: 'PB'},
  {npu: '1111111-11.1111.1.11.1111', dataCadastro: '15/07/2024', uf: 'PB'},
  {npu: '1111111-11.1111.1.11.1111', dataCadastro: '15/07/2024', uf: 'PB'},
  {npu: '1111111-11.1111.1.11.1111', dataCadastro: '15/07/2024', uf: 'PB'},
  {npu: '1111111-11.1111.1.11.1111', dataCadastro: '15/07/2024', uf: 'PB'},
  {npu: '1111111-11.1111.1.11.1111', dataCadastro: '15/07/2024', uf: 'PB'},
  {npu: '1111111-11.1111.1.11.1111', dataCadastro: '15/07/2024', uf: 'PB'},
  {npu: '1111111-11.1111.1.11.1111', dataCadastro: '15/07/2024', uf: 'PB'},
  {npu: '1111111-11.1111.1.11.1111', dataCadastro: '15/07/2024', uf: 'PB'},
  {npu: '1111111-11.1111.1.11.1111', dataCadastro: '15/07/2024', uf: 'PB'}

];
