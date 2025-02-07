import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/componentes/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private headerService: HeaderService){
    headerService.headerData = {
      titulo: 'Inicio',
      icone: 'home',
      rotaUrl: '/produtos'
    }
  }

  ngOnInit(): void {
  }

}
