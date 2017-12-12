import { Directive, HostListener, Input, Optional, ElementRef, OnInit, HostBinding, Output } from '@angular/core';
import { Validator, NgModel } from '@angular/forms';

@Directive({
    selector: '[imgDefault]',
    providers: [NgModel]
})
export class ImgDirective implements OnInit {
    @Input() url: string;
    constructor(@Optional() public model: NgModel) { }

    ngOnInit(){
        
    }


    @HostListener('focusout')       
    focusOut() {
        
        if(this.model.value != null && this.model.value != undefined){
            const img = this.trocaImg(this.url);
            this.model.viewToModelUpdate(img);
            console.log(`url: ${img}`);
        }      
    }
    

    trocaImg(url) {
        let imgDefault: string = '../../img/img-default.jpg';
            this.url = this.model.value
        if (this.url.substring(0, 8) != 'https://' || this.url.substring(0, 7) != 'http://') {
            this.model.valueAccessor.writeValue(this.url);
            this.url = imgDefault;
            return this.url;
        }

            return this.model.value;

    }

}