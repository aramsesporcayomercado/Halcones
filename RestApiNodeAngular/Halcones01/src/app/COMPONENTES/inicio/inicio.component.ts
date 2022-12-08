import { Component, OnInit } from '@angular/core';
import { MaquinasService, Maquina } from '../../SERVICES/maquinas.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //variable
//ListarMaquina:undefined[];

  constructor(private MaquinasService:MaquinasService ){}

  ngOnInit(): void {
  //  this.listarMaquina();
  }

/*listarMaquina()
{
  this.MaquinasService.getMaquinas().subscribe(
    res=>{
      console.log(res)
      this.ListarMaquina=<any>res;
     
    },
    err => console.log(err)
  );
}*/

}
