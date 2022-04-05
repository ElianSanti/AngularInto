import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes:string[]=['Spiderman','Ironman','Hulk','Thor','Capitán America']
  heroeBorrado:string[] = [] 
  borrarHeroe(){
    this.heroeBorrado.push(this.heroes.pop()||'');
    console.log(this.heroeBorrado);
  }
}
