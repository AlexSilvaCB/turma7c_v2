import { Component, OnInit} from '@angular/core';
import { TurmaApiService } from 'src/app/service/turma-api.service';
import { Turma7cList } from '../turma7c-list';

@Component({
  selector: 'app-relatos',
  templateUrl: './relatos.component.html',
  styleUrls: ['./relatos.component.scss']
})
export class RelatosComponent implements OnInit {

  public apiGetTurma7c: Turma7cList | any;
  public isLoading: boolean = false;

  constructor(
    private turmaApiService : TurmaApiService
  ){}

  ngOnInit(): void {
    this.getTurma7c()
  }

  public getTurma7c(){
    this.turmaApiService.apiListAll.subscribe(
      res => {
      this.apiGetTurma7c = res,
      this.isLoading = true;
      console.log(this.apiGetTurma7c)
      }
    );
  }

}
