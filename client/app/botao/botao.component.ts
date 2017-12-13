import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component ({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})

export class BotaoComponent {
    constructor(){}

    @Input() nome: string = 'Ok';
    @Input() estilo: string = 'btn btn-primary';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;
    @Input() confirmacao: boolean = false;
    @Output() acao = new EventEmitter();

    public executaAcao() {
        if(this.confirmacao) {
            if(confirm('Tem certeza?')) {
                this.acao.emit(null); 
            }
            return; 
        }          
        this.acao.emit(null);
    }
}