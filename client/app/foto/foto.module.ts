import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';
import { CadastroService } from '../cadastro/cadastro.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ FotoComponent, FiltroPorTitulo ],
  exports: [FotoComponent, FiltroPorTitulo],
  providers: [
    CadastroService
  ],
})
export class FotoModule { }