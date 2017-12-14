import { PainelComponent } from './../painel/painel.component';
import { Component, OnInit, Input } from '@angular/core';
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
    mensagem: string = '';
    nomeFoto: string;
    foto: FotoComponent;
    id: string;
    constructor(private cadastroService: CadastroService) {

    }

    ngOnInit() {
        this.listarFotos()
    }

    removerFoto(foto: FotoComponent, painel: PainelComponent) {
        this.cadastroService.remover(foto)
            .subscribe(
            success => {
                painel.fadeOut(() => {

                    let novasFotos = this.fotos.slice(0);
                    let indice = novasFotos.indexOf(foto);
                    novasFotos.splice(indice, 1);
                    this.fotos = novasFotos;
                    this.mensagem = 'Foto removida com sucesso';
                });
            },
            error => {
                this.mensagem = 'Não foi possível remover a foto'
            }
            )
    }

    listarFotos() {
        this.cadastroService.listar()
            .subscribe(fotos => {
                this.fotos = fotos

            }, error => console.log(error))
    }

}