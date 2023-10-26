import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

  Slid1:boolean = false
  Slid2:Boolean = false
  btActive:string = ""
  btActive1:string = ""
  btActive2:string = ""

  constructor(){ }

  ngOnInit(): void { }

  Slide1(){
    this.Slid1 = true
    this.Slid2 = false

    this.btActive = "active"
    this.btActive1 = ""
    this.btActive2 = ""
  }

  Slide2(){
    this.Slid1 = false
    this.Slid2 = true

    this.btActive = ""
    this.btActive1 = "active"
    this.btActive2 = ""
  }

  SlideAll(){
    this.Slid1 = true
    this.Slid2 = true

    this.btActive = ""
    this.btActive1 = ""
    this.btActive2 = "active"
  }

}
