import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarCompoment } from './shared/start.compoment';
import { HttpModule } from '@angular/http';

import { ProductDetailComponent } from './products/product-detail.component';


@NgModule({
    imports: [BrowserModule,
         FormsModule,
         HttpModule,
         RouterModule.forRoot([
             {path: 'productos', component: ProductListComponent},
             {path: 'producto/:id', component: ProductDetailComponent},
             {path: 'welcome', component: WelcomeComponent},
             {path: '', redirectTo: 'welcome', pathMatch:'full'},
             {path: '**', redirectTo: 'welcome', pathMatch:'full'}
         ], {useHash: true})
    ],
    declarations: [
        AppComponent
        , ProductListComponent
        , ProductFilterPipe
        , StarCompoment
        , ProductDetailComponent
        , WelcomeComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule{ }