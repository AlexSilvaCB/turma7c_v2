import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TurmaApiService } from 'src/app/service/turma-api.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-section-carrossel',
  templateUrl: './section-carrossel.component.html',
  styleUrls: ['./section-carrossel.component.scss']
})
export class SectionCarrosselComponent implements OnInit {

  public turma7cId: any;
  /*public turma7cIdd: any;
  public turma7cIddd: any;*/
  
  public isLoading: boolean = false;
  public apiError: boolean = false;

  private urlTurma7c:string = 'http://localhost:8080/form'

  constructor(
    private activatedRoute: ActivatedRoute,
    private turmaApiService : TurmaApiService
   
  ){}

  ngOnInit(): void {
    this.getTurma7cId()
   /* this.getTurma7cIdd()
    this.getTurma7cIddd()*/

  }



  public getTurma7cId(){
    const id = '1';
    
    const turma7cId = this.turmaApiService.apiGetTurma7c(`${this.urlTurma7c}/${id}`)

    return forkJoin([turma7cId]).subscribe(
      {next: (res) =>{
        this.turma7cId = res;
        this.isLoading = true;
          console.log(res)},
        error: (error) => this.apiError})
  }

 /* public getTurma7cIdd(){
    const id = '3';
    
    const turma7cId = this.turmaApiService.apiGetTurma7c(`${this.urlTurma7c}/${id}`)

    return forkJoin([turma7cId]).subscribe(
      {next: (res) =>{
        this.turma7cIdd = res;
          console.log(res)},
        error: (error) => this.apiError})
  }

  public getTurma7cIddd(){
    const id = '4';
    
    const turma7cId = this.turmaApiService.apiGetTurma7c(`${this.urlTurma7c}/${id}`)

    return forkJoin([turma7cId]).subscribe(
      {next: (res) =>{
        this.turma7cIddd = res;
          console.log(res)},
        error: (error) => this.apiError})
  }*/


}
