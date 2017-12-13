import { Component, Input, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroService } from './cadastro.service';
import { ImgDirective } from './img.directive';


@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    mensagem: string = '';
    imgDefault: string = '../../img/img-default.jpg';

    constructor(
        private cadastroService: CadastroService, 
        private fb: FormBuilder, 
        private route: ActivatedRoute, 
        private router: Router) {}

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
                    foto => {this.foto = foto
                    },
                    erro => {console.log(erro)}
                );
            }
        })
    }

    cadastrar(event) {
        event.preventDefault();
        this.cadastroService.cadastrar(this.foto)
            .subscribe(res => {
                // console.log('antes do if ' + this.foto.url);
                // if(this.foto.url.substring(0, 8) != 'https://' || this.foto.url.substring(0, 7) != 'http://') {
                //     this.foto.url = '../../img/img-default.jpg';
                // }
                // this.foto.url = this.foto.url;
                this.mensagem = res.mensagem
                console.log(this.foto)
                this.foto = new FotoComponent
                if(!res.inclusao) this.router.navigate(['']);
                
            }, error => console.log(error))

    }
}