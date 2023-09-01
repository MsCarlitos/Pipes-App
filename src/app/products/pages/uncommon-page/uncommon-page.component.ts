import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18Selected Pipe
  public name:string = 'Carlos Mendoza';
  public gender:'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural Pipe
  public clients:string[] = ['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  deleteClient(){
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Carlos',
    age: 28,
    address: 'Sonora, México'
  }

  // Async Pipe
  public myObserbableTimer: Observable<number> = interval(2000)
  .pipe(
    tap( value => console.log('tap: ', value) )
  );

  public promiseValue:Promise<string> = new Promise(( resolve, reject ) => {
    setTimeout( () => {
      resolve('Tenemos data en la promesa')
    }, 3500)
  })
}
