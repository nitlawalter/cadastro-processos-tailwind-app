import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ProcessoService } from '../../services/processo.service';
import { ModalVisualizacaoComponent } from '../modal-visualizacao/modal-visualizacao.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-processos-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatCardModule, MatIcon, DatePipe],
  templateUrl: './processos-list.component.html',
  styleUrl: './processos-list.component.scss'
})
export class ProcessosListComponent implements AfterViewInit {
  displayedColumns: string[] = ['npu', 'dataCadastro', 'uf', 'acoes'];
  //dataSource = new MatTableDataSource<Processo>(ELEMENT_DATA);
  dataSource = new MatTableDataSource<Processo>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null = null;

  constructor(
    private processoService: ProcessoService,
    public dialog: MatDialog
  ) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.processoService.getProcessos().subscribe((processos) => {
      this.dataSource.data = processos;
    });
  }

  editar(obj: any) {
    console.log('edit');
  }

  deletar(obj: any) {
    console.log('delete');
  }

  visualizar(obj: any) {
    console.log('view');
    this.dialog.open(ModalVisualizacaoComponent,
      {
        data: obj,
        width: '900px',
        height: '600px'
      }
    );
  }

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
