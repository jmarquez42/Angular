import {Component} from '@angular/core';


@Component({
    selector: 'pm-app',
    template:`<div><h1>{{titulo}}</h1><pm-products></pm-products></div>`

})

export class AppComponent{
    titulo: string = 'Administracion de Producto'
}