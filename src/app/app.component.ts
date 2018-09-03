import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      <img [src]="url" style="width:300px;"> 
    </div>

    <p [innerHTML]="htmlStr+'abc'"> 
    
   

    <ul *ngIf="heroes.length > 1">
      <li *ngFor="let hero of heroes">{{hero.name}}</li>
    </ul>
   
    <input #input1 type="text" (input)="textInput($event)" value=""/>
    <br>
    Uppercase: {{upperCase}}

<br />
    <input [(ngModel)]="fg" />
<div [ngStyle]="{'color': '#'+fg , 'background-color':'red'}">test</div>
<br />
<hr />

<div [class.special]="isSpecial">Special?</div>
<div [class.special]="x.length>4">
<span [style.backgroundColor]="'#'+fg" [style.fontSize]="fontSize">Special?</span>
</div>

<button [style.color]="isSpecial?'red':'green'">

 
  `,
  styles: ['h1{color:green;} .special{font-size:30pt;} backgroundColor{color:#ffaabb;}']
})
export class AppComponent {
  title = 'app';
  x = 100;
url = 'http://drfoodle.com/wp-content/uploads/2017/10/Fast-food-800x500.jpg';
htmlStr: string = 'Hey!';
heroes = [
  {name:'thor'},
  {name:'loki'},
  {name:'black panther'},
  {name:'cap'},
  {name:'iron man'}
];

upperCase:string = '';
textInput(event) {
this.upperCase = event.target.value.toUpperCase();
}

fg = "ffaabb";
isSpecial = true;
fontSize = '100px';

}
