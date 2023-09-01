import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower:string = 'Carlos Mendoza';
  public nameUpper:string = 'CARLOS MENDOZA';
  public fullname:string = 'CaRlOs MeNdoZa';

  public customDate: Date = new Date();

}
