import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from 'src/app/servicios/infopagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public servicio:InfopaginaService) { }

  ngOnInit(): void {
  }

}
