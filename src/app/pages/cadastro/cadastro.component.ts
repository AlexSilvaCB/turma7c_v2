import { Component, OnInit,  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { TurmaApiService } from 'src/app/service/turma-api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{

  turma7cForm!: FormGroup
  alert: Boolean = false
  checkboxValue: Boolean = false

  constructor(
    private turmaApiService : TurmaApiService
  ){}

  ngOnInit(): void {
    this.turma7cForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      turma: new FormControl('', [Validators.required]),
	    nickname: new FormControl(''),
	    simOuNao: new FormControl(''),
      descricao: new FormControl(''),
	    simOuNao2: new FormControl(''),
	    descricao2: new FormControl(''),
    })

  }

  get nome(){
    return this.turma7cForm.get('nome')!;
  }

  get nickname(){
    return this.turma7cForm.get('nickname')!;
  }

  get turma(){
    return this.turma7cForm.get('turma')!;
  }

  get descricao(){
    return this.turma7cForm.get('descricao')!;
  }

  get simOuNao(){
    return this.turma7cForm.get('simOuNao')!;
  }

  get descricao2(){
    return this.turma7cForm.get('descricao2')!;
  }

  get simOuNao2(){
    return this.turma7cForm.get('simOuNao2')!;
  }

  onSubmit(){
    if(this.turma7cForm.invalid)
    return
   this.turmaApiService.save(this.turma7cForm.value).subscribe(
    {next: (resultService) =>
    this.onSucess(),
    error: (error) => this.onError()})
  }

  private onSucess(){
    this.alert = true;
  }

  private onError(){
    alert("ERROR AO ENVIAR DADOS")
  }

 onClik(){
  this.checkboxValue = !this.checkboxValue
 }

}
