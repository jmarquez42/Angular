import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { AppComponent }   from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarCompoment } from './shared/start.compoment';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, ProductListComponent, ProductFilterPipe, StarCompoment],
    bootstrap: [AppComponent]
})

export class AppModule{ }