import {Component, OnInit} from '@angular/core';
import { IProduct } from './product'

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/products-list.component.html',
    styleUrls: ['app/products/products-list.component.css']
})

export class ProductListComponent implements OnInit{

    tituloPagina: string = 'Lista de Productos';
    imagenMargen: number = 2;
    imagenAncho: number = 50;
    mostrarImagen: boolean = false;
    listarFiltro: string = 'Ras';
    products: IProduct[] = [
        {
            "idProducto": 1,
            "nombreProducto": "Rastrillo",
            "codigoProducto": "GDN-0011",
            "fechaPublicacion": "Marzo 19, 2016",
            "descripcion": "Rastrillo de 48 pulgadas con mango de madera",
            "precio": 19.95,
            "rating": 3.2,
            "imagenURL": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "idProducto": 2,
            "nombreProducto": "Carretilla",
            "codigoProducto": "GDN-0023",
            "fechaPublicacion": "Marzo 18, 2016",
            "descripcion": "Carretilla rodante con capacidad para 15 galones",
            "precio": 32.99,
            "rating": 4.2,
            "imagenURL": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
    ];

    toggleImagen(): void {
        this.mostrarImagen = !this.mostrarImagen;
    }

    ngOnInit(): void {
       console.log("Test");
    }
}