import { Component, OnChanges, Input, EventEmitter,Output } from "@angular/core";


@Component({
    selector:'wc-star',
    templateUrl:'app/shared/star.component.html',
    styleUrls:['app/shared/star.component.css']
   
})  
  
export class StarCompoment implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

    ngOnChanges(): void{
        this.starWidth = this.rating * 86 / 5;
    }
    onClick(){
        this.ratingClicked.emit(`El rating ${this.rating} fue clickeado `);
    }
}