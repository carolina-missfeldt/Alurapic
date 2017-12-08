import { Component, Input, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroService } from './cadastro.service';


@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;

    constructor(private cadastroService: CadastroService, private fb: FormBuilder, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.meuForm = this.fb.group({
            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url: ['', Validators.required],
            descricao: [''],
        });

        this.route.params.subscribe(params => {

            let id = params['id'];

            if (id) {

                this.cadastroService.buscaPorId(id)
                    .subscribe(
                    foto => this.foto = foto,
                    erro => console.log(erro));
            }
        })
    }

    cadastrar(event) {
        event.preventDefault();
        this.cadastroService.cadastrar(this.foto)
            .subscribe(() => {
                alert('Foto salva');
                this.foto = new FotoComponent

            }, error => console.log(error))

    }
}