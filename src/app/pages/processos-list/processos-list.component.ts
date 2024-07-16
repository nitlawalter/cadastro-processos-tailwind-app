import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-processos-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatCardModule, MatIcon],
  templateUrl: './processos-list.component.html',
  styleUrl: './processos-list.component.scss'
})
export class ProcessosListComponent implements AfterViewInit {
  displayedColumns: string[] = ['npu', 'dataCadastro', 'uf', 'acoes'];
  dataSource = new MatTableDataSource<Processo>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null = null;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  edit(obj: any) {
    console.log('edit');
  }

  delete(obj: any) {
    console.log('delete');
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
