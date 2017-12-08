import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from './../foto/foto.component';
import { CadastroService } from './../cadastro/cadastro.service';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html' 
})
export class ListagemComponent implements OnInit { 

    fotos: FotoComponent[] = [];

    constructor( private cadastroService: CadastroService) {
        
    }

    ngOnInit(){
        this.listarFotos()
    }

    removerFoto(foto){
        this.cadastroService.remover(foto)
        .subscribe(dados => {
            alert(`Foto ${foto.titulo} removida com sucesso`)
            this.listarFotos()
        },
            error => {console.log('não foi possível remover a foto')}
        )
    }

    listarFotos() {
        this.cadastroService.listar()
        .subscribe( fotos =>{
            this.fotos = fotos;
        }, error => console.log(error))
    }
}