import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarraComponent } from './components/menu-barra/menu-barra.component';
import { MenuTituloComponent } from './components/menu-titulo/menu-titulo.component';
import { CardGrandeComponent } from './components/card-grande/card-grande.component';
import { CardPequenoComponent } from './components/card-pequeno/card-pequeno.component';
import { HomeComponent } from './Paginas/home/home.component';
import { ContentComponent } from './Paginas/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarraComponent,
    MenuTituloComponent,
    CardGrandeComponent,
    CardPequenoComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
