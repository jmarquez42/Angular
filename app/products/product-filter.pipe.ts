import { PipeTransform, Pipe } from "@angular/core";
import { IProduct } from "./product";

@Pipe({
    name:'productFilter'
})

export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], args: string[]): IProduct []{
        let filterString: string = args[0] ? args[0].toLowerCase() : null;
        console.log(filterString);
        
        return filterString? 
            value.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filterString) != -1) 
            : value;
    }

}