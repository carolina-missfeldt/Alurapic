import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './../foto/foto.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Injectable()

export class CadastroService {
    headers: Headers;
    url: string = 'v1/fotos';
    foto: FotoComponent;
    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    cadastrar(foto: FotoComponent): Observable<any> {
        if (foto._id) {
            return this.http.put(`${this.url}/${foto._id}`, JSON.stringify(foto), 
            { headers: this.headers })
            .map(() => ({mensagem: 'Foto alterada com sucesso', inclusao: false}));
        } else {
            return this.http.post(this.url, JSON.stringify(foto), 
                { headers: this.headers })
                .map(() => ({mensagem: 'Foto incluída com sucesso', inclusao: true}))
        }
    }

    listar(): Observable<FotoComponent[]>  {
        return this.http.get(this.url)
            .map(res => res.json())
        
    }

    remover(foto: FotoComponent) {
        return this.http.delete(`${this.url}/${foto._id}`);
    }

    buscaPorId(id: string): Observable<FotoComponent> {
        
            return this.http
                .get(`${this.url}/${id}`)
                .map(res => res.json());
        }


}