import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
// import { Http} from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroService } from './cadastro.service';


@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html' 
})
export class CadastroComponent { 

    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;

    constructor(private cadastroService: CadastroService, fb: FormBuilder) {
        
        
        this.meuForm = fb.group({
            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url: ['', Validators.required],
            descricao: [''],
        });
    }

    cadastrar(event) {
        event.preventDefault();
        this.cadastroService.cadastrar(this.foto)
        .subscribe(()=> {
            alert('Foto cadastrada com sucesso');
            this.foto = new FotoComponent

        }, error => console.log(error))

    }
}