import { Component } from '@angular/core';
import { ConfigService } from './config.service';
import { Orcamento, PessoaJuridica } from './types';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  public pessoa: PessoaJuridica = {
    nome: "",
    cnpj: "",
  };
  public titulo = 'teste';
  public orcamento: Orcamento = {} as Orcamento;

  constructor(private configService: ConfigService) { }


  ngOnInit(): void {
    this.getOrcamento();
  }

  getOrcamento(): void {
    this.configService.getOrcamento()
      .subscribe(orcamento => this.orcamento = orcamento);
  }

  postPessoaJuridica(): void {
    this.configService.postPessoaJuridica(this.pessoa)
  }
  submitted = false;
  onSubmit() { this.submitted = true; }
}
