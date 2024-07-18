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
    private paginatorIntl: MatPaginatorIntl
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
        height: '600px'
      }
    )
  }

  deletar(obj: any) {
    console.log('delete');
  }

  visualizar(obj: any) {
    this.dialog.open(ModalVisualizacaoComponent,
      {
        data: obj,
        width: '900px',
        height: '600px'
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
        height: '600px'
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        console.log('Recarregando a lista de processos');
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
