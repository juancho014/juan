import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from '../../servicios/infopagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  

  public Año: number = new Date().getFullYear();

  constructor(public servicio: InfopaginaService) { }

  ngOnInit(): void {
  }

}
