export interface Processo {
  id?: number;
  npu: string;
  dataCadastro: string;
  dataVisualizacao?: string;
  municipio: string;
  uf: string;
  documento: Uint8Array; // ou Array<number> dependendo de como você manipula os dados binários
}

