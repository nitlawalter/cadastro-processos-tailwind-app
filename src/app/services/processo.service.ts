import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Processo } from '../model/processo/processo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  private apiUrl = `${environment.apiUrl}/processos`;

  constructor(private http: HttpClient) { }

  getProcessos(): Observable<Processo[]> {
    return this.http.get<Processo[]>(this.apiUrl);
  }

  getProcesso(id: number): Observable<Processo> {
    return this.http.get<Processo>(`${this.apiUrl}/${id}`);
  }

  createProcesso(processo: Processo): Observable<Processo> {
    return this.http.post<Processo>(this.apiUrl, processo, {
      headers: { 'Content-Type': 'application/json' }
     });
  }

  updateProcesso(processo: Processo): Observable<Processo> {
    return this.http.put<Processo>(`${this.apiUrl}/${processo.id}`, processo, {
      headers: { 'Content-Type': 'application/json' }
     });
  }

  deleteProcesso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateDataVisualizacao(id: number): Observable<Processo> {
    return this.http.put<Processo>(`${this.apiUrl}/${id}/visualizacao`, {
      headers: { 'Content-Type': 'application/json' }
    });
  }


}
