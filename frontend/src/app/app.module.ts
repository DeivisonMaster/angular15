import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './componentes/template/header/header.component';
import { NavComponent } from './componentes/template/nav/nav.component';
import { FooterComponent } from './componentes/template/footer/footer.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule}  from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './views/home/home.component';
import { CrudProdutoComponent } from './views/crud-produto/crud-produto.component';
import { CorVermelhoDirective } from './diretivas/cor-vermelho.directive';
import { MeuForDirective } from './diretivas/teste/meu-for.directive';
import { NovoComponent } from './componentes/produto/novo/novo.component';
import { ListarComponent } from './componentes/produto/listar/listar.component';
import { ListarExemploComponent } from './componentes/produto/listar-exemplo/listar-exemplo.component';
import { EditarComponent } from './componentes/produto/editar/editar.component';
import { ExcluirComponent } from './componentes/produto/excluir/excluir.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CrudProdutoComponent,
    CorVermelhoDirective,
    MeuForDirective,
    NovoComponent,
    ListarComponent,
    ListarExemploComponent,
    EditarComponent,
    ExcluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
