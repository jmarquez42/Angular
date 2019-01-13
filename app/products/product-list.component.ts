import {Component, OnInit} from '@angular/core';
import { IProduct } from './product'
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/products-list.component.html',
    styleUrls: ['app/products/products-list.component.css']
})

export class ProductListComponent implements OnInit{

    tituloPagina: string = 'Lista de Productos';
    imagenMargen: number = 2;
    imagenAncho: number = 50;
    mostrarImagen: boolean = false;
    listarFiltro: string = '';
    products: IProduct[] ;
    mensajeError: string;

    constructor(private _productService: ProductService){

    }

    toggleImagen(): void {
        this.mostrarImagen = !this.mostrarImagen;
    }

    ngOnInit(): void {
        this._productService.getProducts()
        .subscribe(
                products => this.products = products,
                error => this.mensajeError = <any>error
                );
    }

    onRatingClicked(message: string): void{
        this.tituloPagina = 'Lista de productos: ' + message;
    }
}