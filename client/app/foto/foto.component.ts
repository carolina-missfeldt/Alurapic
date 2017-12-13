import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html' 
})
export class FotoComponent {

    @Input() titulo: string = '';
    @Input() url: string = '../../img/img-default.jpg';
    descricao: string = '';
    _id: string = '';
}