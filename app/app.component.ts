import {Component} from '@angular/core';
import { ProductService } from './products/product.service';


@Component({
    selector: 'pm-app',
    template:`<div><h1>{{titulo}}</h1><pm-products></pm-products></div>`,
    providers: [ProductService]
})

export class AppComponent{
    titulo: string = 'Administracion de Producto'
}